var React = require('react')

// Set up a style object (this is best kept in another file and exported)
var styles = {
  row: {height: '50px'},
  cell: {height: '50px', width: '50px', display:'inline-block'},
  colorA: {backgroundColor: prompt('What should be the first color?')},
  colorB: {backgroundColor: prompt('What should be the second color?')}
}

// App component
function App (props){
    return <CheckerBoard rows={props.rowNum}/>
}

// CheckerBoard component
function CheckerBoard (props){
  // props.rows will equal the number collected from prompt in the App component

  // Create an array to hold all our Row elements
  var cRows = [];

  for(var i = 0; i < props.rows; i++ ) {
    // For each row, create a row using the Row component. Pass down the number of cells to create, and the current row we're on -- we'll use that number to decide which color to start with.
    cRows.push(<Row key={i} rowNum = {i} cells = {props.rows}/>)
  }
  return (
    <div>
      {cRows}
    </div>
  )
}

// Row component
function Row (props){
  // Use props.rowNum to decide what the colors are for odd/even cells
  var colorA = (props.rowNum % 2 === 0 ) ? "colorA" : "colorB"
  var colorB = (colorA === "colorA" ) ? "colorB" : "colorA"

  var cCells = [];

  for(var i = 0; i < props.cells; i++ ) {
    cCells.push(<Cell key={i} color = { (i % 2 === 0) ? colorA : colorB } style={styles.cell}/>)
  }
  return (
    <div style={styles.row}>
      {cCells}
    </div>
  )
}

// Cell component
function Cell (props) {
  // The only purpose of this component is to render a div with the correct styling, which we've linked to a property the Row parent passed down.
  return (
    // Need to use Object.assign to turn two style objects into one
    <div style={ Object.assign({}, styles.cell, styles[props.color]) }></div>
  )
}

module.exports = App