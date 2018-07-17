import React from "react";
import Button from "../Button";
import Zipcode from "../Zipcode";

const Main = () => 
    <div className="block-top">
        <div className="row">
            <div>Looking for snap benefits in your local area? Enter your preferences below.</div>
                <Button>WIC</Button>
                <Button>WIC SNAP</Button>
                <Button>SNAP</Button>
                <Button>SFMNP</Button>
                <Zipcode />
        </div>
    </div>



export default Main;
