"use strict";

var React = require('React');
var Router = require('react-router');
var routes = require('./routes');

Router.run(routes, function(Handler){ // Router.HistoryLocation
    React.render(<Handler/>, document.getElementById('app'));
});
