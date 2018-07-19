import React, {Component} from "react";
import Button from "../Button";
import Zipcode from "../Zipcode";

class Main extends Component {

    state = {
    payments: [
    {
        name: "WIC"
    },
    {
        name: "WIC SNAP"
    },
    {
        name: "SNAP"
    }, 
    {
        name: "SFMNP"
    }
    ]
    }
    render() {
        return(

        <div className="height70vh overflow-h bg-FBFEFF">
            <div className="t-a-c fs-didact">
            <div>Looking for snap benefits in your local area? Enter your zipcode below.</div>
            <div className="d-f center">{this.state.payments.map(payment => (
            <Button name={payment.name} />
        ))}</div>
            <Zipcode />
        </div>
    </div>

        )}


}



export default Main;
