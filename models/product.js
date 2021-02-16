var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var product = new Schema({  //couldn't use new if wasn't a variable
  title: String,
  price: Number,
  likes: {type: Number, default: 0}
});

module.exports = mongoose.model('Product', product);
// export the schema formed for the database
//if not mentioned in schema, data won't be saved
