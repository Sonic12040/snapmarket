import React from "react";
import searchIcon from './search-icon.png';



const Zipcode = (props) => 
<div className="formName">
    <div className="zipcodeSearch">
        <form className="form-container"
            onSubmit={props.onSubmit}>

            <input 
                id="form-bar"
                placeholder="Enter your Zipcode" 
                value={props.value}
                onChange={props.onSearchChange}
            />

                 <a href="#" type="submit"><img  alt="search" className="search-icon" src={searchIcon} /></a>
         </form>  
    </div>
</div>


export default Zipcode;
