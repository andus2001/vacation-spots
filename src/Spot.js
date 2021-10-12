import React from 'react'

function Spot(props){
   
    return(
        <div>
            <h1>{props.place}</h1>
            <p>${props.price} - {props.timeToGo}</p>
        </div>
    )
}

export default Spot