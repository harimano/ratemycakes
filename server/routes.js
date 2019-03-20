const controllers = require('./controllers.js');

module.exports = app => {

  app
    // .get('/api/cakes', controllers.getAllcakes)
    .get('/api/cakes/:id', controllers.getOneCake)
    .post('/api/cakes', controllers.createCake)
    .put('/api/cakes/update/:id', controllers.updateCake)
    .delete('/api/cakes/:id', controllers.deleteCake);
}
