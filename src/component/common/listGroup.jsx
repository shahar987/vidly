import React from "react";


function ListGroup({onItemSelect, items, textProperty, valueProperty, selectedGenre}){

    return(
        <ul className="list-group">
            {items.map(item =>(
            <li 
                className={item[valueProperty] === selectedGenre ? "list-group-item active":"list-group-item" }
                key={item[valueProperty]} 
                onClick={() => onItemSelect(item)} 
                style={{cursor: "pointer"}}>{item[textProperty]}
            </li>
            ))}
        </ul>
    )

}

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id'
}

export default ListGroup