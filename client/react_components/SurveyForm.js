var React = require('react')

// ask question of whether data exists, we use state.
var SurveyForm = React.createClass({
  getInitialState: function(){
    return {
      results: null
    }
  },
  render: function(){
    return (this.state.results === null) ? <FormComponent /> : <Results Component />
  }
})

// Form Component
var FormComponent = React.createClass({
  getInitialState: function() {
    return {
      name: '',
      course: '',
      rating: '',
      comment: '',
    }
  },
  handleInputChange(key, event){
    console.log("KEY", key)
    console.log("EVENT", event)
  },
  render: function(){
    console.log("Form: ", this.state)
    return (
      <form>
        <label>Name</label>
        <input value={this.state.name} type='text' 
        onChange={this.handleInputChage.bind(this, 'name')}/> <br/>
        <label>Course</label>
        <select value={this.state.course}>
          <option>React</option>
          <option>Angular</option>
          <option>Bootstrap</option>
        </select> <br/>
        <label>Rating</label>
        <input type='number' value={this.state.rating}/> <br/>
        <label>Comment</label>
        <textarea value={this.state.comment}></textarea> <br/>
        <input type="submit" 
        value="submit"/>
      </form>
    )
  }
})

// Results Component

var ResultsComponent = React.createClass({
  render: function(){
    return <h1>Results Component</h1>
  }
})

module.exports = SurveyForm














