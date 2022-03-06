import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import CardLists from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.components';

const App = () =>{


  const [search, setSearch]= useState('') //Value and set value
  console.log({search})

  const onSearchChange = (event) =>{ //FILTERED SEARCH
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearch(searchFieldString);
  };

  return (
      <div className="App">   
          <h1 className='monster-header'>Monster Data Platform </h1>
        <SearchBox 
          onChangeHandlerss={onSearchChange} 
          placeholder='Search Here!' 
          className='monster-search-box'
        />
        {/* <CardLists monster={filteredMonster} /> */}
    </div>  
  )
}

// class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       monster: [],
//       search: ''
//     }
//   }
//   //FETCH API
//   componentDidMount(){
//     fetch('https://monster-api-project.herokuapp.com/monsters')
//     .then(response => response.json())

//       .then(users => this.setState({
//         monster: users.monster
//       }))
  
//   }

//   //SEARCH FUNCTION
//     onSearchChange = (event) =>{ //FILTERED SEARCH
//       const search = event.target.value.toLocaleLowerCase();
//       this.setState(()=>{  
//         return {search}
//       })
//     }

//   render() {  
//     const { monster, search } = this.state;
//     const { onSearchChange } = this;  
//     const filteredMonster = monster.filter((monster)=>{
//       return monster.monster.toLocaleLowerCase().includes(search);
//     })

//     return (  
//     <div className="App">   
//     <h1 className='monster-header'>Monster Data Platform </h1>
//         <SearchBox 
//           onChangeHandlerss={onSearchChange} 
//           placeholder='Search Here!' 
//           className='monster-search-box'
//         />
//         <CardLists monster={filteredMonster} />
//     </div>  
//     )
//   }
// }
export default App;
