import React from 'react';
import '../styles/Result.css';
import Sunny from '../images/Sunny.png'
import Cloudy from '../images/Cloudy.png'
import PartlyCloudy from '../images/PartlyCloudy.png'
import RainAndCloudy from '../images/RainAndCloudy.png'
import RainLight from '../images/RainLight.png'



const Result = (props) => {

    const temperatures = props.temp.map(({ date, temperature }) => {
        return <div key={date}><p>{temperature}</p></div>
    })
    const pollenCounts = props.temp.map(({ date, pollenCount }) => {
        return <div key={date}><p>Pollen: {pollenCount}</p></div>
    })
    const dates = props.temp.map(({ date }) => {
        return <div key={date}><p>{date}.</p></div>
    })


    const images = props.temp.map(({ date, type }) => {
        if (type === "Sunny") {
            return <div key={date}><img src={Sunny} alt="" /></div>
        } else if (type === "PartlyCloudy") {
            return <div key={date}><img src={PartlyCloudy} alt="" /></div>
        } else if (type === "RainAndCloudy") {
            return <div key={date}><img src={RainAndCloudy} alt="" /></div>
        } else if (type === "RainLight") {
            return <div key={date}><img src={RainLight} alt="" /></div>
        } else if (type === "Cloudy") {
            return <div key={date}><img src={Cloudy} alt="" /></div>
        } return null
    })

    return (
        <div className="resultContainer">
            <div className="todayWeather">
                <div className="todayImage">
                    {images[0]}
                </div>
                {props.prec ? <p>Precipitation: {props.prec}%</p> : null}
                {props.humi ? <p>Humidity: {props.humi}%</p> : null}
                {props.wSpeed ? <p>Wind: {props.wSpeed}mph {props.wDire}</p> : null}
                {props.poll ? <p>Pollen Count: {props.poll}</p> : null}
            </div>
            <div className="weeklyWeather">
                <div className="image">
                    {images}
                </div>
                <div className="dayName">
                    {dates}
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