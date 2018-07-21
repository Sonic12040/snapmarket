import React, {Component} from "react";
import { connect } from "react-redux";
import { handleSearch } from '../../store/actions/searchActions'
import Button from "../Button";
import Zipcode from "../Zipcode";

class Main extends Component {

    state = {
    payments: [
    {
        name: "WIC",


    },
    {
        name: "WIC SNAP",

   
    },
    {
        name: "SNAP",

        
    }, 
    {
        name: "SFMNP",

        
    }
    ],
    filter: [],
    query: "",
    }
    
    toggleClass = (newFilter) => {
        //if statement to not duplicate
        if (!this.state.filter.includes(newFilter)) {
            
            // console log is returning names correctly
            const paymentArray = this.state.filter; 
            paymentArray.push(newFilter);
            this.setState({ filter: paymentArray });
        } else {
            const removeIndex = this.state.filter.indexOf(newFilter);
            console.log(removeIndex);
            this.setState({
                filter: this.state.filter.filter(item => item !== newFilter)
            })
            
        }
    };

    onSubmit = event => {
        event.preventDefault();
        const data = {
            query: this.state.query,
            filter: this.state.filter,
        }
        console.log(data);
        this.props.onHandleSearch(data);
        this.setState({ query: ""});
    }

    onSearchChange = (event) => {
        this.setState({
            query: event.target.value

        })
    }


    render() {

        if(this.state.value === 'true') {
            console.log(this.state.value)
        }
        console.log(this.state.filter); 
        return(

        <div className="height70vh overflow-h bg-FBFEFF l-h1">
            <div className="t-a-c fs-didact">
            <div className="mb-2em fade-in mt-1em">enter your preferences below</div>
            <div className="mb-2em fade-in2">or scroll down to see the map</div>
            <div className="d-f center">{this.state.payments.map(payment => (
            <Button name={payment.name} onClick={this.toggleClass} />
        ))}</div>
            <Zipcode onSearchChange={this.onSearchChange} onSubmit={this.onSubmit} value={this.state.query} />
        </div>
    </div>

        )}


}

const mapDispatchToProps = dispatch => ({

    onHandleSearch: (query) => dispatch(handleSearch(query))

})


export default connect(null, mapDispatchToProps)(Main);
