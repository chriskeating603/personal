  var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  name: String,
  abv: String,
  ibu: String,
  description: String
});

var Item = mongoose.model('Item', itemSchema);

var selectAll = function(callback) {
  Item.find(function(err, items) {
    if(err) {
      console.log('HERE1')
      callback(err, null);
    } else {
      console.log('HERE2')
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.Item = Item;