# My Assets NodeJs-ExpressJs Server

My Assets NodeJs-ExpressJs is an application to manage your assets, this app has:

    * RESTful endpoint for asset's CRUD operation
    * JSON formatted response


# RESTful endpoint for Product


### GET /product

- Request Header
```js
{
    no needed
}
```

- Request Body
```js
    not needed
```

- Response (200 - Success GET Product)
```js
{
    "totalItems": 4,
    "product": [
        {
            "id": 3,
            "name": "DRESS",
            "qty": 500,
            "picture": "pic-dress",
            "expiredAt": "2022-08-04",
            "isActive": true,
            "createdAt": "2022-08-04T07:59:52.959Z",
            "updatedAt": "2022-08-04T07:59:52.959Z"
        },
        {
            "id": 6,
            "name": "PANTS",
            "qty": 500,
            "picture": "pic-pants",
            "expiredAt": "2022-08-04",
            "isActive": true,
            "createdAt": "2022-08-04T07:59:52.959Z",
            "updatedAt": "2022-08-04T07:59:52.959Z"
        },
        {
            "id": 7,
            "name": "CHINO",
            "qty": 200,
            "picture": "pic-CHINO",
            "expiredAt": "2022-08-05",
            "isActive": true,
            "createdAt": "2022-08-04T14:28:52.679Z",
            "updatedAt": "2022-08-04T14:28:52.679Z"
        }
    ],
    "totalPages": 2,
    "currentPage": 1
}
```

- Response (500 - Internal Server Error)
```js
{
    message: [
        "Internal server error"
    ]
}
```


### GET /product/:id

- Request Header
```js
{
    no needed
}
```

- Request Body
```js
    not needed
```

- Response (200 - Success GET Product By ID)
```js
{
    "productById": {
        "id": 4,
        "name": "JEANS",
        "qty": 500,
        "picture": "pic-jeans",
        "expiredAt": "2022-08-04",
        "isActive": false,
        "createdAt": "2022-08-04T07:59:52.959Z",
        "updatedAt": "2022-08-04T07:59:52.959Z"
    }
}
```

- Response (500 - Internal Server Error)
```js
{
    message: [
        "Internal server error"
    ]
}
```


### POST /product

- Request Header
```js
{
    no need
}
```

- Request Body
```js
{
    "name": "Hat",
    "qty": 250,
    "picture": "pic-hat",
    "expiredAt": "2022-08-08"
}
```

- Response (201 - Success POST Product)
```js
{
    "id": 9,
    "name": "Hat",
    "qty": 250,
    "picture": "pic-hat",
    "expiredAt": "2022-08-08",
    "updatedAt": "2022-08-04T15:01:58.707Z",
    "createdAt": "2022-08-04T15:01:58.707Z",
    "isActive": true
}
```

- Response (400 - Bad Request)
```js
{
    "message": [
        "name cannot be empty"
    ]
}
```

- Response (500 - Not Found)
```js
{
    message: [
        "Internal server error"
    ]
}
```


### DELETE /product/:id

- Request Header
```js
{
    no needed
}
```

- Request Body
```js
    not needed
```

- Response (200 - Success DELETE Product By Id)
```js
{
    "message": "Product TSHIRT has been deleted"
}
```

- Response (404 - Not Found)
```js
{
    "message": "Data Not Found"
}
```

- Response (500 - Internal Server Error)
```js
{
    "message": "Internal Server Error"
}
```


### PUT /product/:id

- Request Header
```js
{
    no need
}
```

- Request Body
```js
{
    "name": "SHORT PANTS UPDATE",
    "picture": "pic-shortpants-update",
    "qty": 415
    "expiredAt": "2022-08-06"
}
```

- Response (201 - Success UPDATE Product By Id)
```js
{
    "news": {
        "id": 1,
        "title": "DPR Minta Kuota Biosolar Ditambah",
        "content": "Komisi VII DPR mendesak pemerintah menambah kuota biosolar sebanyak 2 juta kiloliter tahun ini sehingga total alokasinya naik dari 15,1 juta kiloliter menjadi 17,1 juta kiloliter. Pemerintah juga diminta menjamin pendistribusian biosolar tepat sasaran di daerah.",
        "imgUrl": "https://assetd.kompas.id/gN_OsUdqIaO7Akyo3clhyMEphfE=/1200x799/https%3A%2F%2Fasset.kgnewsroom.com%2Fphoto%2Fpre%2F2022%2F03%2F28%2Fed01bff0-1805-4d95-9189-0a45e10ced36_jpg.jpg",
        "status": "active",
        "authorId": 2,
        "categoryId": 1,
        "createdAt": "2022-03-30T12:10:21.705Z",
        "updatedAt": "2022-03-30T12:30:20.343Z"
    }
}
```

- Response (404 - Not Found)
```js
{
    "message": [
        "Data Not Found"
    ]
}
```

- Response (500 - Internal Server Error)
```js
{
    message: [
        "Internal server error"
    ]
}
```