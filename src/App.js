import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import CardLists from './components/card-list/card-list.component';
class App extends Component {
  constructor(){
    super();
    this.state = {
      monster: [],
      search: ''
    }
  }
  //FETCH API
  componentDidMount(){
    fetch('https://monster-api-project.herokuapp.com/monsters')
    .then(response => response.json())

      .then(users => this.setState({
        monster: users.monster
      }))
  
  }

  //SEARCH FUNCTION
    onSearchChange = (event) =>{ //FILTERED SEARCH
      const search = event.target.value.toLocaleLowerCase();
      this.setState(()=>{  
        return {search}
      })
      console.log('Youre search a: ',search);
    }

  render() {  
    const { monster, search } = this.state;
    const { onSearchChange } = this;  
    const filteredMonster = monster.filter((monster)=>{
      return monster.monster.toLocaleLowerCase().includes(search);
    })

    return (  
    <div className="App">   
        <input className='Search' type='search' placeholder='Monster' onChange={onSearchChange} />
        <CardLists monster={filteredMonster} />
    </div>  
    )
  }
}
export default App;
