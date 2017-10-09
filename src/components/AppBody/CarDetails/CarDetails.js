import React from 'react';
const CarDetails = (props)=>(
    <h1>Your request vechile details are {props.match.params.modelID}</h1>
)

export default CarDetails;