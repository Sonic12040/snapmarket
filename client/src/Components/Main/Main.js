import React, { Component } from "react";

const Main = () => 
    <div className="block-top">
        <div className="row">
            <div>Looking for snap benefits in your local area? Enter your zipcode below.</div>
                <div className="formName">
                <p>Enter Zipcode</p>
                    <div className="zipcodeSearch">
                        <form>
                            <input type="text" className="Textfield-input" />
                            <button type="button" id="submit-search" className="button">Find Snaps</button>
                            </form>
                    
                    </div>
            </div>
        </div>
    </div>



export default Main;
