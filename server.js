var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackConfig = require('./webpack.config');
var config = require('./config');

var app = new require('express')();

var compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

console.log('LOOK', process.env.NODE_ENV);

app.listen(config.port, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s.", config.port);
    }
});
