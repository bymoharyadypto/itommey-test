const { product, sequelize } = require('../models')
const { Op } = require('sequelize')

class IndexController {


    static getPagingData(dataProduct, page, limit) {
        const { count: totalItems, rows: product } = dataProduct;
        const currentPage = page ? + page : 1;
        const totalPages = Math.ceil(totalItems / limit);
        return { totalItems, product, totalPages, currentPage };
    }


    static getPagination(page) {
        const limit = 3
        if (page === 1) {
            let offset = 0
            return { limit, offset }
        } else {
            let offset = page ? page * limit - 3 : 0
            return { limit, offset }
        }
    }

    static async getProducts(req, res) {
        try {
            const name = req.query.name || ''
            const { page } = req.query
            const { limit, offset } = IndexController.getPagination(page)
            const products = await product.findAndCountAll({
                where: {
                    [Op.and]: [{ name: { [Op.iLike]: `%${name}%` } }, { isActive: true }]
                }, offset, limit
            })
            const responseData = IndexController.getPagingData(products, page, limit)
            res.status(200).json(responseData)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Internal Server Error" })
        }
    }

    static async getProductById(req, res) {
        try {
            const productById = await product.findByPk(req.params.id, {
                where: { isActive: true }
            })
            if (!productById) throw ({ name: "Data Not Found" })
            res.status(200).json({ productById })
        } catch (error) {
            if (error.name == "Data Not Found") res.status(404).json({ message: "Data Not Found" })
            else res.status(500).json({ message: "Internal Server Error" })
        }
    }

    static async addProduct(req, res) {
        const { name, qty, picture, expiredAt } = req.body
        try {
            console.log(name, qty, picture, expiredAt);
            const addProduct = await product.create({ name, qty, picture, expiredAt })
            res.status(201).json(addProduct)
        } catch (error) {
            console.log(error);
            if (error.name === 'SequelizeValidationError') {
                let messegeErrorValidation = error.errors.map(el => {
                    return el.message
                })
                res.status(400).json({ message: messegeErrorValidation })
            }
            res.status(500).json({ message: "Internal Server Error" })
        }
    }

    static async removeProduct(req, res) {
        try {
            const productById = await product.findByPk(req.params.id, { where: { id: req.params.id } })
            if (!productById) throw ({ name: "Data Not Found" })
            await product.update({ isActive: false }, {
                where: { id: req.params.id }, returning: true
            })
            res.status(200).json({ message: `Product ${productById.name} has been deleted` })
        } catch (error) {
            if (error.name == "Data Not Found") res.status(404).json({ message: "Data Not Found" })
            else res.status(500).json({ message: "Internal Server Error" })
        }
    }

    static async updateProduct(req, res) {
        const { name, qty, picture, expiredAt } = req.body
        const t = await sequelize.transaction();
        try {
            const productById = await product.findByPk(req.params.id)
            if (!productById) throw ({ name: "Data Not Found" })
            const updateStatus = await product.update({ name, qty, picture, expiredAt },
                {
                    where: { id: req.params.id },
                    returning: true
                }, { transaction: t })
            await t.commit()
            res.status(201).json({ updateStatus })
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = IndexController