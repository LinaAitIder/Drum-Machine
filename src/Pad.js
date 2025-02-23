import 'bootstrap/dist/css/bootstrap.css'; 
import React from 'react';
import './Drum.js'

class Pad extends React.Component{
  constructor(){
    super();
    this.handleTrigger = this.handleTrigger.bind(this);
    this.handleKey = this.handleKey.bind(this);
  }

  //This will be called after the component has rendered
  componentDidMount(){
    document.addEventListener('keydown', this.handleKey);
  }

  //This will be called when the component will be removed from the DOM
  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKey);
  }

  //Can use Destructing for better clean code

  //handling the click event
  handleTrigger(value){
    let audioElement = document.getElementById(value);
    audioElement.play();
    this.props.updateDisplay(`Playing the ${this.props.value} key`);
  }

  //handling the key event
  handleKey(event){
    if(event.key.toUpperCase() === this.props.value.toUpperCase()){
      document.getElementById(this.props.value).play();
    }
  }


  render(props){
    return(
      <div className="container m-2 drum-pad col-3 justify-content-center "
      onClick={()=>this.handleTrigger(this.props.value)} 
      id={this.props.id}>

        <span>{this.props.value}</span>
        <audio 
          src={this.props.audio} className="clip" 
          id={this.props.value}>
        </audio>
        
      </div>
    );
  }
}

export default Pad;