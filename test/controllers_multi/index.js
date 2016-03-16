exports.setup = function (app, callback) {
    app.get('/', 'test');
    callback();
};
