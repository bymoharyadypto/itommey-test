'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  product.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'name is required'
        },
        notEmpty:{
          msg: 'name cannot be empty'
        }
      }
    },
    qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'quantity is required'
        },
        notEmpty:{
          msg: 'quantity cannot be empty'
        }
      }
    },
    picture: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'picture is required'
        },
        notEmpty:{
          msg: 'picture cannot be empty'
        }
      }
    },
    expiredAt: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate:{
        notNull:{
          msg: 'expiredAt is required'
        },
        notEmpty:{
          msg: 'expiredAt cannot be empty'
        }
      }
    },
    isActive: {
      type: DataTypes.BOOLEAN
    }
  }, {
    sequelize,
    modelName: 'product',
    hooks: {
      beforeCreate: (instance, option) => {
        instance.isActive = true
      }
    }
  });
  return product;
};