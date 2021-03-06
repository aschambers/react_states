var React = require('react')
var ReactDOM = require('react-dom')

var States = React.createClass({
    getInitialState: function(){
        return {
        name: '',
        age: null,
        occupation: ''
        }
    },
    render: function (){
        return (
                <div>
                    <p>Name: <input onChange = {this.handleNameChange}/> {this.state.name}</p>
                    <p>Age: <input onChange = {this.handleAgeChange}/> {this.state.age}</p>
                    <p>Occupation: <input onChange = {this.handleOccupationChange}/> {this.state.occupation}</p>
                </div>
            )
    },
    handleNameChange: function(event){
        this.setState({name: event.target.value });
    },
    handleAgeChange: function(event){
        this.setState({age: event.target.value });
    },
    handleOccupationChange: function(event){
        this.setState({occupation: event.target.value });
    }
});

module.exports = States
