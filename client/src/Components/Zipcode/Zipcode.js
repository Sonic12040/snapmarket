import React from "react";
import Form from "../Form";



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

              
         </form>  
    </div>
</div>


export default Zipcode;
