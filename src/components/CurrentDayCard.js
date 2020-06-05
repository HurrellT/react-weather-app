import React from 'react';
var moment = require('moment');

const CurrentDayCard = ({ reading, degreeType }) => {
    let newDate = new Date();
    const weekday = reading.dt * 1000
    newDate.setTime(weekday)

    const fahrenheit = Math.round(reading.main.temp)
    const celsius = Math.round((fahrenheit - 32) * 5 / 9)
    const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

    return (
        <div className="col-sm-11 d-flex justify-content-center align-items-center align-self-center">
            <div className="col-sm-2">
                <h3 className="">{moment(newDate).format('dddd')}</h3>
                <p className="text-muted">{moment(newDate).format('MMMM Do, h:mm a')}</p>
            </div>
            <div className="col-sm-4">
                <i className={imgURL}></i>
                <p className="">{reading.weather[0].description}</p>
            </div>
            <h2>{degreeType === "celsius" ? celsius + "°C" : fahrenheit + "°F"}</h2>
        </div>

    )
}

export default CurrentDayCard;