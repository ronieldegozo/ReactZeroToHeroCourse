import { Component } from "react";

class CardList extends Component{
    render(){
        console.log('Render');
        const { monster } = this.props;
        console.log(monster);
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