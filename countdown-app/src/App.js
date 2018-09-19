import React, {Component} from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            deadline: 'September 20, 2018',
            newDeadline: '',
        }
    }
    
    changeDeadline(){
        this.setState({ deadline:this.state.newDeadline})
        }
    render() {
        return(
            <div className="App">
                <div className="App-Title">
                Countdown to {this.state.deadline}
                </div>
                <Clock deadline="this.state.deadline"/>
                <input placeholder="new date" onChange={event => this.setState({newDeadline: event.target.value})} />
                <button onClick={() => this.changeDeadline()}>Submit</button>
                {/* Use anonymous function to prevent the app from looping and crashing! */}
            </div>
        )
    }
}

export default App;