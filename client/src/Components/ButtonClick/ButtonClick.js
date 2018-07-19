import React, {Component} from "react";


class ButtonClick extends Component {
    constructor(props) {
        super(props);
        this.buttonClicked= this.buttonClicked.bind(this);
        this.state = {
            active: false,
        };
    }
    toggleClass() {
        console.log("does this work");
        const currentState = this.state.active;
        this.setState({ active: !currentState });

    };

    render() {
        return (
            <div 
                className={this.state.active ? 'buttonClicked': null} 
                onClick={this.toggleClass} 
            >
                <p>{this.props.text}</p>
            </div>
        )
  }
}




// class Form extends React.Component {
//     state = {
//         zipcode: "",
//     }

//     onSubmit = e => {
//         e.preventDefault();
//         this.props.onSubmit(this.state);
//         this.setState({
//             zipcode: ""
//         });
//     }

//     render() {
//         return (
//             <form>
//                 <input 
//                 placeholder="Enter your Zipcode" 
//                 value={this.state.zipcode}
//                 onChange={e => this.setState({ zipcode: e.target.value})}
//                  />

//                  <button className="button-1" onClick={e => this.onSubmit()}>Submit</button>
//             </form>
//         );
//     }
// }



export default ButtonClick;