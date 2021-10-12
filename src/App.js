import React from 'react'
import Spot from './Spot'
import vacationSpots from './vacationSpots'
function App(){
    const spotData = vacationSpots.map(place => 
    <Spot place={place.place}     
    price ={place.price} 
    timeToGo={place.timeToGo} 
    />)
    return(
        <div>
            {spotData}
        </div>
    )
}

export default App