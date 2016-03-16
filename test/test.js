var lib = require('../lib/index.js');

var app = {
    getRoutes: [],
    postRoutes: [],
    get: function () {
        app.getRoutes.push({items: arguments});
    },
    post: function () {
        app.postRoutes.push({items: arguments});
    }
};

exports.try_setup_get = function (test) {
    lib.load(app, __dirname + '/controllers_get', function () {
        test.equal(1, app.getRoutes.length);
        test.done();
    });
};

exports.try_setup_post = function (test) {
    lib.load(app, __dirname + '/controllers_post', function () {
        test.equal(1, app.postRoutes.length);
        test.done();
    });
};

exports.try_setup_multiple_controllers = function (test) {
    lib.load(app, __dirname + '/controllers_multi', function () {
        test.equal(1, app.postRoutes.length);
        test.done();
    });
};
