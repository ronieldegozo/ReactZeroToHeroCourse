import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {CardList} from './components/card-list/card-list.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monster: [],
      search: ''
    }
  }

  componentDidMount(){
    fetch('https://monster-api-project.herokuapp.com')
    .then(response => response.json())

      .then(users => this.setState({
        monster: users.monster
      }))

  }
  render() {  

    const filtredMonserData = this.state.monster.filter((monster) =>{
      return monster.monster.toLowerCase().includes(this.state.search);
    })  

    return (  
    <div className="App">   
        <input className='Search' type='search' placeholder='Monster' onChange={(event) =>{ //FILTERED SEARCH

          const search = event.target.value.toLowerCase();
          this.setState(()=>{  
            return {search}
          })
          console.log(search);
        }} />

        <CardList name="Roniel">
          {
            filtredMonserData.map(monster => <h1 key={monster._id}>{monster.monster} {monster.description}</h1> )
          }
        </CardList>
    </div>  
    )
  }
}
export default App;
