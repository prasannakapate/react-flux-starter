"use strict";

var React = require('React');

var Header = React.createClass({
    render: function () {
        return (
            <nav className="navebar navebar-default">
                <div className="container-fluid">
                    <ul className="nav navbar-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#authors">Authors</a></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;