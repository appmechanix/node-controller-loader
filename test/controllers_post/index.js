exports.setup = function (app, callback) {
    app.post('/', 'test2');
    callback();
};
