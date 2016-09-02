var React = require('react'),
    ReactDOM = require('react-dom'),
    App = require('./App')

// RENDERING TIME! Render app and pass down the results of a prompt.
ReactDOM.render(<App rowNum={prompt("How many rows should the checkerboard have?")} />, document.getElementById('app'))
