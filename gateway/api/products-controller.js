var moment = require('moment');

const Products = require('../models/product');

const productsController = apiRouter => {

    apiRouter.get('/products', (req, res, next) => {
        Products.find({}, (err, existingProducts) => {
            if (err) {
                return next(err);
            }
            res.json(existingProducts);
        });
    });

    apiRouter.get('/products/:code', (req, res, next) => {
        const code = req.params.code;
        //validate
        if (!code) {
            return res.status(400).send({error: "bad request"});;
        }

        Products.findOne({
            code: code.toUpperCase()
        }, (err, existingProduct) => {
            if (err) {
                return next(err);
            }
            if (existingProduct) {
                return res.json(existingProduct);
            } else {
                return res.status(404).send({error: "there is no data"});
            }
        });
    });

    apiRouter.post('/products', (req, res, next) => {
        const code = req.body.code;
        const name = req.body.name;
        const description = req.body.description;
        const type = req.body.type;
        const createdDate = moment.utc();
        //validate
        if (!code || !name || !type) {
            return res.status(422).send({error: "You must provide code , name and type"});
        }

        Products.findOne({
            code: code.toUpperCase()
        }, (err, existingProduct) => {
            if (err) {
                return next(err);
            }

            if (existingProduct) {
                return res.status(422).send({error: 'Existing Product'});
            }

            const Product = new Products({code, name, type, description, createdDate});

            Product.save((err) => {
                if (err) {
                    return next(err);
                }
                res.json(Product);
            });

        });
    });

    apiRouter.put('/products/:code', (req, res, next) => {
        const code = req.params.code;

        const name = req.body.name;
        const description = req.body.description;
        const type = req.body.type;

        //validate
        if (!code) {
            return res.status(400).send({error: "bad request"});;
        }
        if (!name || !type) {
            return res.status(422).send({error: "You must provide name and type"});
        }
        Products.findOne({
            code: code.toUpperCase()
        }, (err, existingProduct) => {
            if (err) {
                return next(err);
            }

            if (existingProduct) {
                existingProduct.name = name || existingProduct.name;
                existingProduct.description = description || existingProduct.description;
                existingProduct.type = type || existingProduct.type;

                existingProduct.save((err) => {
                    if (err) {
                        return next(err);
                    }
                    res.json(existingProduct);
                });

            } else {
                return res.status(404).send({error: "there is no data"});
            }

        });

    });

    apiRouter.delete('/products/:code', (req, res, next) => {
        const code = req.params.code;

        //validate
        if (!code) {
            return res.status(400).send({error: "bad request"});
        }

        Products.findOne({
            code: code.toUpperCase()
        }, (err, existingProduct) => {
            if (err) {
                return next(err);
            }
            if (existingProduct) {
                existingProduct.remove((err) => {
                    if (err) {
                        return next(err);
                    }
                    return res.status(204).send({});
                });
            } else {
                return res.status(404).send({error: "there is no data"});
            }
        });

    });
}

module.exports = {
    default: productsController
}
