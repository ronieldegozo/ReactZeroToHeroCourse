import { Component } from "react";

class CardList extends Component{
    render(){
        console.log(this.props.monster);
        console.log('Render from card list');
        const { monster } = this.props;
        return(
            <div>
                <h1>{monster.map(monster=>(
                    <p key={monster._id}>{monster.monster}</p>
                ))}</h1>
            </div>
        )
    }
}
export default CardList;