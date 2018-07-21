import React from 'react';

const InfoWindow = ({marketname, address, zipcode, benefits, items}) => 
<div id="infoWindow">
    <h1>{marketname}</h1>
    <h2>{address}</h2>
    <h2>{zipcode}</h2>
    <h3>Benefits Accepted</h3>
    <p>{benefits}</p>
    <h3>Items Available</h3>
    <p>{items}</p>
</div>

export default InfoWindow;