import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(){
      super();
      this.state = {
        string: 'Roniel',
        age: 23,
        address: 'SMR'
      }
    };
  render() {
    return (  
    <div className="App"> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      {/* <h1>{this.state.string} </h1> */}
      <p>Hi my name is {this.state.age}</p>
      <button onClick={()=> this.setState({age:21})}>Change Text</button>
      </header>
    </div>  
    )
  }
}
export default App;

// function App() {
//   return (  
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

