import React from "react";


const Button = (props) => { 
    const handleClick = () => {
        props.onClick(props.name)
        document.getElementById(props.name).classList.toggle("buttonClicked");

    }

return( 

    <div>
        <div className="button-1" id={props.name} onClick={()=>handleClick()}>
            <div className="left-push"></div>
            <a className="z-index-3" href="#">{props.name}</a>
        </div>
    </div>
)
}





export default Button;
