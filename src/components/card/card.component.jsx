import { Component } from "react";
import './card.styles.css';


const Card = (props) =>{
        const { monster } = props;
        return(
        <div className="card-list">
            {monster.map(monsters=>{
            const {monster, _id, description} = monsters;
            return (
                <div className="card-container" key={_id}>
                    <img alt={`Monster ${monster}`} src={`https://robohash.org/${_id}?set=size&300x300`}/>
                    <h2>{monster}</h2>
                    <h3>{description}</h3>  
                </div>
            )})}
        </div>
        )
}

export default Card;