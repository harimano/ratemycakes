const Cake = require('./models');

module.exports = {

  getAllCakes: (req, res) => {
    Cake.find()
      .then(data => console.log(data) || res.json(data))
      .catch(err => console.log(err) || res.json(err));
  },

  getOneCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOne({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  createCake: (req, res) => {
    const DATA = req.body;
    console.log("hari", DATA);
    Cake.create(DATA)
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  updateCake: (req, res) => {
    const ID = req.params.id;
    const DATA = req.body;
    Cake.findOneAndUpdate({_id:ID}, DATA, {runValidators:true, new:true})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  },

  deleteCake: (req, res) => {
    const ID = req.params.id;
    Cake.findOneAndDelete({_id:ID})
      .then(data => res.json(data))
      .catch(err => res.json(err));
  }
}