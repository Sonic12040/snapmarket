import React from 'react';

const ItemList = (props) => 
    <ul>
        {props.items.map(i => {
        return <li>{i}</li>
        })}
    </ul>

export default ItemList;