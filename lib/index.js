var fs = require('fs');
var path = require('path');
var async = require('async');

exports.load = function (app, controllerPath, callback) {
    fs.readdir(path.join(__dirname, controllerPath), function (err, controllers) {
        async.eachSeries(
            controllers,
            function (item, cb) {
                var controller = require('./' + controllerPath + '/' + controllers[i]);
                controller.Setup(app, cb);
            },
            callback)
    });
};
