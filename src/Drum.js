import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'; 
import pads from "./data.js";
import Pad from './Pad.js';
import './styleSheet.scss';

class Drum extends React.Component{
  constructor(){
    super();
    this.state = {
      displayText : ""
    };
    this.updateDisplay = this.updateDisplay.bind(this);
  }

  updateDisplay(text){
    this.setState({displayText:text});
  }

  render(){
    return(
      <div id="drum-machine" className="container row  justify-content-around">
       { pads.map(e => (
          <Pad
          key={e.id} 
          id={e.id} 
          audio={e.audio}
          value={e.value}
          updateDisplay={this.updateDisplay} 
          />
       ))
      }
        
        
      <div id="display" >{this.state.displayText}</div>
      </div>
    );
  }


}

export default Drum;