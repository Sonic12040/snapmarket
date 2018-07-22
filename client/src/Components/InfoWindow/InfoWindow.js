import React from 'react';
import ItemList from './../ItemList';
import Benefits from './../Benefits';

const InfoWindow = (props) => 
<div id="infoWindow">
    <h1>{props.marketname}</h1>
    <h2>{props.address}</h2>
    <h2>{props.zipcode}</h2>
    <h3>Benefits Accepted</h3>
    <Benefits 
        benefitsArray={props.benefitsArray}
    />
    <h3>Items Available</h3>
    <ItemList
        items={props.items}
    />
</div>

export default InfoWindow;