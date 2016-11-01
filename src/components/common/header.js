"use strict";

var React = require('React');
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navebar navebar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><link to="/">Home</link></li>
                        <li><link to="about">About</link></li>
                        <li><link to="authors">Authors</link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;