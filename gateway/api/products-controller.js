var moment = require('moment');


const Products = require('../models/product');

const productsController = apiRouter => {
    apiRouter.get('/products', (req, res, next) => {});
    apiRouter.get('/products/:code', (req, res, next) => {
      Products.findOne({code},(err,existingProduct)=>{
        if(err){
          return next(err);
        }

      });
    });
    apiRouter.post('/products', (req, res, next) => {
      console.log('+++'+req.body.code);
      const code= req.body.code;
      const name=req.body.name;
      const description= req.body.description;
      const type= req.body.type;
      const createdDate=moment.utc();

      Products.findOne({code:code.toUpperCase()},(err,existingProduct)=>{
        if(err){
          return next(err);
        }

        if(existingProduct){
          return res.status(422).send({error:'Existing Product'});
        }

        const Product= new Products({
          code,
          name,
          type,
          description,
          createdDate
        });

        Product.save((err)=>{
          if(err){
            return next(err);
          }
          res.json(Product);
        });

      });
    });
    apiRouter.put('/products/:code', (req, res, next) => {});
    apiRouter.delete('/products/:code', (req, res, next) => {});
}

module.exports = {
    default: productsController
}
