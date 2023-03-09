import React from 'react'
import "../styling/hours.css"


function hours(props) {
     return (
    <div className='hours'>
    
        <div className="days">
          <h2>{props.day}</h2>
        </div>
        <div className="opening">
        <h2>{props.open}</h2>
        </div>
        <div className="dash">
            <h1>-</h1>
        </div>
        <div className="closing">
        <h2>{props.close}</h2>
        </div>
    </div>
  )
}

export default hours