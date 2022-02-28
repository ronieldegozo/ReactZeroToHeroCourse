import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
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
        <CardList name="Roniel">
          {
            this.state.monster.map(monster => <h1 key={monster._id}>{monster.monster} {monster.description}</h1> )
          }
        </CardList>
    </div>  
    )
  }
}
export default App;
