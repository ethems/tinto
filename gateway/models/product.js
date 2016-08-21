var moment = require('moment');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    code: {
        type: String,
        unique: true,
        uppercase: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    type:{
      type:String,
      enum:['vegetablefruit','meat','seafood','dryfood'],
      required: true
    },
    description: String,
    createdDate: Date,
    modififedDate:Date
});

productSchema.pre('save',function(next){
    const product=this;
    product.modififedDate=moment.utc();
    next();
});

const ProductModel = mongoose.model('product', productSchema);

module.exports = ProductModel;
