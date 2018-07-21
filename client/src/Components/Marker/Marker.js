import React, { Component } from 'react';

const Marker = ({ image, alttext, onClick }) => <img id="marker"src={image} alt={alttext} onClick={onClick}></img>;

export default Marker;