var React = require('react'),
    ReactDOM = require('react-dom'),
    SurveyForm = require('./SurveyForm')

// RENDERING TIME! Render app and pass down the results of a prompt.
ReactDOM.render(<SurveyForm />, document.getElementById('app'))
