exports.setup = function(app, callback){
    app.get('/contacts/:userId');
    callback();
};