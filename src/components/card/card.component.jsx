import { Component } from "react";
import './card.styles.css';
class Card extends Component{
    render(){
        const { monster } = this.props;
        return(
        <div className="card-list">
            {monster.map(monsters=>{
            const {monster, _id, description} = monsters;
            return (
                <div className="card-container" key={_id}>
                    <img alt={`Monster ${monster}`} src={`https://robohash.org/monster/${_id}?set=set2&size=180x180`}/>
                    <h2>{monster}</h2>
                    <h3>{description}</h3>
                </div>
            )})}
        </div>
        )
    }
}

export default Card;