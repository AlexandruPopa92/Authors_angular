var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/authors_db');

var AuthorSchema = new mongoose.Schema({
   name:{ type: String, required: [ true, 'Name is required' ], minlength: [ 3, 'Name must be at least 3 charcaters long' ]}
  },{timestamps: true});

module.exports = mongoose.model('Author',AuthorSchema);
