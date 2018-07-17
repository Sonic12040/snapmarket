import React from "react";

class Form extends React.Component {
    state = {
        zipcode: "",
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({
            zipcode: ""
        });
    }

    render() {
        return (
            <form>
                <input 
                placeholder="Enter your Zipcode" 
                value={this.state.zipcode}
                onChange={e => this.setState({ zipcode: e.target.value})}
                 />

                 <button className="button-1" onClick={e => this.onSubmit()}>Submit</button>
            </form>
        );
    }
}

export default Form;

