import { Component } from "react";
import './search-box.styles.css';

const SearchBox = ({className,placeholder,onChangeHandlerss})=>(
        <input 
        className={`search-box ${className}`}
        type='search' 
        placeholder={placeholder} 
        onChange={onChangeHandlerss} />
   
)

export default SearchBox;