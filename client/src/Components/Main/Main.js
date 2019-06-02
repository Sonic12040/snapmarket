import React, {Component} from "react";
import { connect } from "react-redux";
import { handleSearch } from '../../store/actions/searchActions'
import Button from "../Button";
import Zipcode from "../Zipcode";

class Main extends Component {

    state = {
        payments: [
        {
            name: "Wic"
        },
        {
            name: "WicCash"
        },
        {
            name: "Snap"
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
        this.props.onHandleSearch(data);
        this.setState({ query: ""});
    }

    onSearchChange = (event) => {
        this.setState({
            query: event.target.value
        })
    }


    render() {
        return(
            <div className="height70vh overflow-h bg-FBFEFF l-h1">
                <div className="t-a-c">
                    <div className="mb-2em fade-in mt-1em">Select your benefits below.</div>
                    <div className="d-f center">{this.state.payments.map(payment => (
                        <Button name={payment.name} onClick={this.toggleClass} />
                    ))}
                    </div>
                    <Zipcode onSearchChange={this.onSearchChange} onSubmit={this.onSubmit} value={this.state.query} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    onHandleSearch: (query) => dispatch(handleSearch(query))
})


export default connect(null, mapDispatchToProps)(Main);
