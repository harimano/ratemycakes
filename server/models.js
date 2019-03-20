const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratemycake', {useNewUrlParser:true})
  .catch(err => console.log(err));

const CakeSchema = new mongoose.Schema({
    bakername: {
      type: String, 
      default: ""
    },
    imageurl: {
      type: String, 
      default: ""
    },
    
}, {timestamps:true});

module.exports = mongoose.model('Cake', CakeSchema); 
