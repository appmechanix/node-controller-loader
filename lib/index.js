var fs = require('fs');
var async = require('async');

exports.load = function (app, controllerPath, callback) {
    // Get the controllers from the specified folder
    fs.readdir(controllerPath, function (err, controllers) {
        if (err) {
            console.error(err);
            return;
        }

        // Loop through them one by one and set them up
        async.eachSeries(
            controllers,
            function (item, cb) {
                var controller = require(controllerPath + '/' + item);
                controller.setup(app, cb);
            },
            callback
        );
    });
};
