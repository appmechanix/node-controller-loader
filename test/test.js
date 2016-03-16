var lib = require('../lib/index.js');

var app = {
    getRoutes: [],
    get: function () {
        getRoutes.push({items: arguments});
    }
};

exports.tryLoadControllers = function (test) {
    lib.load(app, 'controllers', function () {
        console.log(app);
        test.equal(1, app.getRoutes.length);
        test.done();
    });
};
