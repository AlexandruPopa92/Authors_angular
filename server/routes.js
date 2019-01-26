const controller = require("./controller");

module.exports = function(app){
    app.get('/api/author', controller.index);
    app.get('/api/author/:id', controller.show);
    app.post('/api/author', controller.add);
    app.put('/api/author/:id',controller.update);
    app.delete('/api/author/:id',controller.remove);

}