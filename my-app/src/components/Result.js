import React from 'react';
import '../styles/Result.css';
import Sunny from '../images/Sunny.png'
import Cloudy from '../images/Cloudy.png'
import PartlyCloudy from '../images/PartlyCloudy.png'
import RainAndCloudy from '../images/RainAndCloudy.png'
import RainLight from '../images/RainLight.png'



const Result = (props) => {

    const { typTo, poll, wDire, wSpeed, humi, prec, full } = props;

    const temperatures = full.map(({ date, temperature }) => {
        return <div key={date}><p>{temperature}&#176;</p></div>
    })
    const pollenCounts = full.map(({ date, pollenCount }) => {
        return <div key={date}><p>Pollen: {pollenCount}</p></div>
    })
    const dates = full.map(({ date }) => {

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


    const images = full.map(({ date, type }) => {
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
                    {dates[0]}
                    {typTo}
                </div>
                <div className="todayInfo">
                    <div className="valueLeft">
                        <div>{images[0]}</div>
                        <div>{temperatures[0]}</div>
                    </div>
                    <div className="valueRight">
                        {prec ? <p>Precipitation: <span>{prec}%</span></p> : null}
                        {humi ? <p>Humidity: <span>{humi}%</span></p> : null}
                        {wSpeed ? <p>Wind: <span>{wSpeed}mph {wDire}</span></p> : null}
                        {poll ? <p>Pollen Count: <span>{poll}</span></p> : null}
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