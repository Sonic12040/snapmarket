import React, {Component} from "react";
import Button from "../Button";
import Zipcode from "../Zipcode";

class Main extends Component {

    state = {
    payments: [
    {
        name: "WIC",
        value: false,

    },
    {
        name: "WIC SNAP",
        value: false,
   
    },
    {
        name: "SNAP",
        value: false,
        
    }, 
    {
        name: "SFMNP",
        value: false,
        
    }
    ],
    filter: []
    }
    
    toggleClass = (newFilter) => {
        console.log(this.state.filter);
        // console log is returning names correctly
        const paymentArray = this.state.filter; 
        paymentArray.push(newFilter);
        this.setState({ filter: paymentArray });

        // this.setState({ value: true });
        
    //     this.toggleClass= this.toggleClass.bind(this);
    //     this.state = {
    //       isActive: false
    //     }
    //   }
      
    //   toggleClass() {
    //     this.setState({
    //       isActive: true
    //     })

    };


    render() {

        if(this.state.value === 'true') {
            console.log(this.state.value)
        }

        return(

        <div className="height70vh overflow-h bg-FBFEFF l-h1">
            <div className="t-a-c fs-didact">
            <div className="mb-2em fade-in mt-1em">enter your preferences below</div>
            <div className="mb-2em fade-in2">or scroll down to see the map</div>
            <div className="d-f center">{this.state.payments.map(payment => (
            <Button name={payment.name} onClick={this.toggleClass} />
        ))}</div>
            <Zipcode />
        </div>
    </div>

        )}




}



export default Main;
