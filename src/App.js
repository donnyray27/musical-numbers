import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayTile from './DisplayTile'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      selectedKey: 0,
      dataSet: []
    }
    this.handleNoteChange = this.handleNoteChange.bind(this)
    this.reorderSharps = this.reorderSharps.bind(this)
    this.reorderFlats = this.reorderFlats.bind(this)
  }

  handleNoteChange(event){
    let keyChange = parseInt(event.target.value)
    let flatKeys = [ 5, 10, 3, 8, 1, 6 ]
    let sharpKeys = [7, 9, 11, 2, 4]
    let majorKeyIndeces = [0, 2, 4, 5, 7, 9, 11]
    this.setState({selectedKey: keyChange})
    let reorderedArray;

    if (flatKeys.includes(keyChange)){
      reorderedArray = this.reorderFlats(keyChange)
    }else if (sharpKeys.includes(keyChange)) {
      reorderedArray = this.reorderSharps(keyChange)
    }else {
      reorderedArray = this.reorderFlats(keyChange)
    }

    let filteredNotes = reorderedArray.filter(function(note){
      return(
        majorKeyIndeces.includes(reorderedArray.indexOf(note))
      )
    })
    this.setState({dataSet: filteredNotes})
    console.log(filteredNotes)
  }


  reorderSharps(note){
    let sharps = [
      "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
    ]
    for(let i=0; i < note; i++){
      let shiftedNote = sharps.shift()
      sharps.push(shiftedNote)
    }
    return sharps
  }

  reorderFlats(note){
    let flats = [
      "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"
    ]
    for(let i=0; i < note; i++){
      let shiftedNote = flats.shift()
      flats.push(shiftedNote)
    }
    return flats
  }
  render() {




    let dropdown = [
      "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"
    ]

    let options = dropdown.map(option => {
      return(
      <option key={dropdown.indexOf(option)} value={dropdown.indexOf(option)}>{option}</option>
      )
    })

    let noteTiles = this.state.dataSet.map(note => {
      return(
        <DisplayTile
          key={this.state.dataSet.indexOf(note)}
          number={this.state.dataSet.indexOf(note)}
          value={note}
          />
      )
    })

    return (
      <div className="App">
        <select onChange={this.handleNoteChange}>
          {options}
        </select>
        {noteTiles}
      </div>
    );
  }
}

export default App;
