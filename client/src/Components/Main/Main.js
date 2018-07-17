import React, { Component } from "react";
import Button from "../Button";
// import Zipcode from "../Zipcode";

const Main = () => 
    <div className="height70vh overflow-h bg-FBFEFF">
        <div className="t-a-c fs-didact">
            <div className="mb-1em">Enter your preferences below.</div>
                <div className="d-f center color-2D2D2D">
                    <Button>WIC</Button>
                    <Button>WIC SNAP</Button>
                    <Button>SNAP</Button>
                    <Button>SFMNP</Button>
                </div>
                {/* <Zipcode /> */}
        </div>
    </div>



export default Main;
