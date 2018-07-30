import React from 'react';

const Marker = ({ image, alttext, onClick }) => <img id="marker"src={image} alt={alttext} onClick={onClick} />;

export default Marker;