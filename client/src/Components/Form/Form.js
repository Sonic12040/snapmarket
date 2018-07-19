import React from "react";

class Form extends React.Component {
    state = {
        zipcode: "",
    }

    onSubmit = e => {
        //  e.preventDefault();
        if (e.key === 'Enter') {
            this.props.onSubmit(this.state);
            this.setState({
                zipcode: ""
            });

        }
       
    }

    render() {
        return (
            <form className="form-container">
                <input 
                id="form-bar"
                placeholder="Enter your Zipcode" 
                value={this.state.zipcode}
                onChange={e => this.setState({ zipcode: e.target.value})}
                onKeyPress={this.onSubmit}
                 />

              
         </form>
        );
    }
}

export default Form;

