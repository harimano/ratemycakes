const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ratemycake', {useNewUrlParser:true})
  .catch(err => console.log(err));

const CakeSchema = new mongoose.Schema({
    title: {
      type: String, 
      default: ""
    },
    description: {
      type: String, 
    },
    completed: {
      type: Boolean, 
      default: false 
    }, 
}, {timestamps:true});

module.exports = mongoose.model('Cake', CakeSchema); 
