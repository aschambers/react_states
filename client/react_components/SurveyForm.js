var React = require('react')

// ask question of whether data exists, we use state.
var SurveyForm = React.createClass({
  getInitialState: function(){
    return {
      results: null
    }
  },
  updateResults: function(formResults){
    this.setState({
      results: formResults
    })
  },
  render: function(){
    return (this.state.results === null) ? 
    <FormComponent updateResults = {this.updateResults}/> : 
    <ResultsComponent results={this.state.results}/>
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
  handleInputChange(key, e){
    var stateObj = this.state
    stateObj[key] = e.target.value
    this.setState(stateObj)
  },
  handleFormSubmit(e){
    e.preventDefault()
    this.props.updateResults(this.state)
    console.log("Form has been submitted, we need to send results to SurveyForm", this.state)
  },
  render: function(){
    // console.log("Form: ", this.state)
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>Name</label>
        <input value={this.state.name} type='text'
        onChange={this.handleInputChange.bind(this, 'name')}/> <br/>
        <label>Course</label>
        <select defaultValue="choose" onChange={this.handleInputChange.bind(this, 'course')}>
          <option disabled value="choose">Choose Course</option>
          <option>React</option>
          <option>Angular</option>
          <option>Bootstrap</option>
        </select> <br/>
        <label>Rating</label>
        <input type='number' value={this.state.rating}
        onChange={this.handleInputChange.bind(this, 'rating')}/> <br/>
        <label>Comment</label>
        <textarea value={this.state.comment}
        onChange={this.handleInputChange.bind(this, 'comment')}></textarea> <br/>
        <input type="submit" 
        value="submit"/>
      </form>
    )
  }
})

// Results Component
var ResultsComponent = React.createClass({
  render: function(){
    var results = this.props.results
    return (
      <div>
        <h1>Results:</h1>
        <p>Name: {results.name}</p>
        <p>Course: {results.course}</p>
        <p>Rating: {results.rating}</p>
        <p>Comment: {results.comment}</p>
      </div>
    )
  }
})

module.exports = SurveyForm














