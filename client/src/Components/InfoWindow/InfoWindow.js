import React from 'react';
import ItemList from './../ItemList';
import Benefits from './../Benefits';




const InfoWindow = (props) =>
<div id="infoWindow" className="color-E5DCD1 bg-2D2D2D wow bounceIn">
    <p className="infoZipcode fs-didact"><span className="fs-1-5rem fs-didact f-bold">&raquo;</span> Zipcode: {props.zipcode}, USA</p>
    <br />
    <h3 className="infoMarketname fs-didact fs-1-5rem f-bold">{props.marketname}</h3>
    <p className="infoAddress fs-didact fs-1-25rem color-FFBF77">{props.address}</p>
    <h3 className="infoMarketname fs-didact fs-1-25rem f-bold">Accepted Benefits</h3>
    <div  className="infoAddress fs-didact">
        <Benefits
            benefitsArray={props.benefitsArray}
        />
    </div>
    <h3 className="infoMarketname fs-didact fs-1-25rem f-bold">Available Items</h3>
    <div  className="infoAddress fs-didact">
        <ItemList
            items={props.items}
        />
    </div>
</div>

export default InfoWindow;