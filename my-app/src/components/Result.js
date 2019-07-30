import React from 'react';
import '../styles/Result.css';
import Sunny from '../images/Sunny.png'
import Cloudy from '../images/Cloudy.png'
import PartlyCloudy from '../images/PartlyCloudy.png'
import RainAndCloudy from '../images/RainAndCloudy.png'
import RainLight from '../images/RainLight.png'



const Result = (props) => {

    const { typeToday, pollenCountToday, windDirection, windSpeed, humidityToday, precipitationToday, fullData } = props;

    const temperatures = fullData.map(({ date, temperature }) => {
        return <div key={date}><p>{temperature}&#176;</p></div>
    })
    const pollenCounts = fullData.map(({ date, pollenCount }) => {
        return <div key={date}><p>Pollen: {pollenCount}</p></div>
    })
    const dates = fullData.map(({ date }) => {

        const dateToday = new Date(date);
        const weekday = new Array(7);
        weekday[0] = "Sunday";
        weekday[1] = "Monday";
        weekday[2] = "Tuesday";
        weekday[3] = "Wednesday";
        weekday[4] = "Thursday";
        weekday[5] = "Friday";
        weekday[6] = "Saturday";
        const day = weekday[dateToday.getDay()]
        return <p key={date}>{day}</p>

    })

    const weekdayToday = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    const dayToday = weekday[weekdayToday.getDay()]

    const monthDate = new Date()
    const months = new Array(12);
    months[0] = "January";
    months[1] = "February";
    months[2] = "March";
    months[3] = "April";
    months[4] = "May";
    months[5] = "June";
    months[6] = "July";
    months[7] = "August";
    months[8] = "September";
    months[9] = "October";
    months[10] = "November";
    months[11] = "December";
    const month = months[monthDate.getMonth()];

    const day = new Date().getDate()

    const images = fullData.map(({ date, type }) => {
        if (type === "Sunny") {
            return <img key={date} src={Sunny} alt={type} />
        } else if (type === "PartlyCloudy") {
            return <img key={date} src={PartlyCloudy} alt={type} />
        } else if (type === "RainAndCloudy") {
            return <img key={date} src={RainAndCloudy} alt={type} />
        } else if (type === "RainLight") {
            return <img key={date} src={RainLight} alt={type} />
        } else if (type === "Cloudy") {
            return <img key={date} src={Cloudy} alt={type} />
        } return null
    })

    return (
        <div className="resultContainer">
            <div className="todayWeather">
                <div className="today">
                    {typeToday ? `${dayToday}, ${month} ${day}` : null}<br />
                    {typeToday}
                </div>
                <div className="todayInfo">
                    <div className="valueLeft">
                        <div>{images[0]}</div>
                        <div>{temperatures[0]}</div>
                    </div>
                    <div className="valueRight">
                        {precipitationToday ? <p>Precipitation: <span>{precipitationToday}%</span></p> : null}
                        {humidityToday ? <p>Humidity: <span>{humidityToday}%</span></p> : null}
                        {windSpeed ? <p>Wind: <span>{windSpeed}mph {windDirection}</span></p> : null}
                        {pollenCountToday ? <p>Pollen Count: <span>{pollenCountToday}</span></p> : null}
                    </div>
                </div>
            </div>
            <div className="weeklyWeather">
                <div className="dayName">
                    {dates}
                </div>
                <div className="image">
                    {images}
                </div>
                <div className="temperature">
                    {temperatures}
                </div>
                <div className="pollenCount">
                    {pollenCounts}
                </div>
            </div>
        </div>

    );
}

export default Result;