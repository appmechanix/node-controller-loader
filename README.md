# node-controller-loader

Loops through controllers in a given directory and sets them up for use in your web framework.

# Installing it

```npm install node-controller-loader --save```

# Using it

```
var controllerLoader = require('node-controller-loader');

var app = new ExpressApplicationOrSimilar();

controllerLoader.load(app, __dirname + '/controllers', function(){
    app.createServer();
});
```