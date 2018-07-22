import React from 'react';

const Benefits = (props) => 
<ul>
    {props.benefitsArray.map(i => {
        return <li>{i}</li>
    })}
</ul>

export default Benefits;