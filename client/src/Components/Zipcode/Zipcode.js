import React from "react";
import searchIcon from './search-icon.png';



function Zipcode ({onSubmit, value, onSearchChange}) { 
return (
<div className="formName">
    <div className="zipcodeSearch">
        <form className="form-container"
            onSubmit={onSubmit}>
            <input
                id="form-bar"
                placeholder="Enter your Zipcode"
                value={value}
                onChange={onSearchChange}
            />
            <a href="/" type="submit"><img  alt="search" className="search-icon" src={searchIcon} /></a>
         </form>
    </div>
</div>
)
}

export default Zipcode;
