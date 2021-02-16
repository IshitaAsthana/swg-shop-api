var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = mongoose.Schema.Types.ObjectId;

var wishlist = new Schema({
  title: {type: String, default: "Cool wishlist"},
  products: [{type: ObjectId, ref: 'Product'}]    // the type has to be a mongoose object already inserted in the database, in the collection Product. Referring data is relationship, instead of defining the schema here too which creates duplicate data
});

module.exports = mongoose.model('Wishlist', wishlist);
