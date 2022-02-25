import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster: [
        {
          id: 1,
          name: 'De Gozo',
        },
        {
          id: 2,
          name: 'Rogine',
        },
        {
          id: 3,
          name: 'Reniella',
        },
      ]
    }
  }
  
  render() {
    return (  
    <div className="App"> 
      {
        this.state.monster.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
      }
    </div>  
    )
  }
  // <p>Hi my name is {this.state.string} and my age is {this.state.age}</p>
  // <button onClick={()=>{
  //   this.setState({
  //     string: 'Rogine',
  //     age: this.state.age + 1,
      
  //   })
  // }}>Change Text</button>
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

