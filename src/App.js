import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monster: []
    }
  }
  componentDidMount(){
    fetch('http://localhost:8080')
    .then(response => response.json())

      .then(users => this.setState({
        monster: users.monster
      }))

  }
  render() {  
    return (  
    <div className="App"> 
      {
        this.state.monster.map(monster => <h1 key={monster._id}>{monster.monster}</h1>)
        
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
