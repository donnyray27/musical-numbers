import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      changeNote: false,
      selectedKey: ''
    }
    this.handleNoteChange = this.handleNoteChange.bind(this)
  }

  handleNoteChange(event){
    let keyChange = event.target.value
    let flatKeys = [ "F", "Bb", "Eb", "Ab", "Db", "Gb" ]
    let sharpKeys = ["G", "A", "B", "D", "E"]
    this.setState({selectedKey: keyChange})

  }
  render() {
    let sharps = [
      "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
    ]

    let flats = [
      "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"
    ]

    let dropdown = [
      "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"
    ]

    let options = dropdown.map(option => {
      return(
      <option key={dropdown.indexOf(option)} value={option}>{option}</option>
      )
    })

    return (
      <div className="App">
        <select onChange={this.handleNoteChange}>
          {options}
        </select>
      </div>
    );
  }
}

export default App;
