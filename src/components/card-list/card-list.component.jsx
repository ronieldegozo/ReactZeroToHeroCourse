import { Component } from "react";


import Card from '../card/card.component';
class CardList extends Component{
    render(){
        console.log(this.props.monster);
        console.log('Render from card list');
        const { monster } = this.props;
        return(
            <Card monster={monster}/>
        )
    }
}
export default CardList;