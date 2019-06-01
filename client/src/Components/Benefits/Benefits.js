import React from 'react';

const Benefits = ({benefitsArray}) => 
<ul>
    {benefitsArray.map(i => {
        return <li>{i}</li>
    })}
</ul>

export default Benefits;