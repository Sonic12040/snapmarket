import React from 'react';
import ItemList from './../ItemList';
import Benefits from './../Benefits';




const InfoWindow = ({zipcode, marketname, address, benefitsArray, items}) =>
<div id="infoWindow" className="color-E5DCD1 bg-2D2D2D wow bounceIn">
    <p className="infoZipcode"><span className="fs-1-5rem f-bold">&raquo;</span> Zipcode: {zipcode}, USA</p>
    <br />
    <h3 className="infoMarketname fs-1-5rem f-bold">{marketname}</h3>
    <p className="infoAddress fs-1-25rem color-FFBF77">{address}</p>
    <h3 className="infoMarketname fs-1-25rem f-bold">Accepted Benefits</h3>
    <div  className="infoAddress">
        <Benefits
            benefitsArray={benefitsArray}
        />
    </div>
    <h3 className="infoMarketname fs-1-25rem f-bold">Available Items</h3>
    <div  className="infoAddress">
        <ItemList
            items={items}
        />
    </div>
</div>

export default InfoWindow;