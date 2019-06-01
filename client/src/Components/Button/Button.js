import React from "react";


const Button = ({onClick, name}) => {
    const handleClick = () => {
        onClick(name)
        document.getElementById(name).classList.toggle("buttonClicked");
    }

return(
    <div>
        <div className="button-1" id={name} onClick={()=>handleClick()}>
            <div className="left-push"></div>
            <a className="z-index-3">{name}</a>
        </div>
    </div>
)
}





export default Button;
