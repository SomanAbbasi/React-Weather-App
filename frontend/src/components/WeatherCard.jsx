import React from 'react'
import { WiDaySunny, WiRain, WiCloudy, WiSnow, WiThunderstorm, WiFog } from 'react-icons/wi';

function WeatherCard({ weatherData }) {

    // If no data, don't render details
    if (!weatherData) {
        return <div className="weather-card">No weather data available</div>;
    }

    function getWeatherIcon() {
        const iconCode = weatherData.icon;
        if (iconCode.includes('01')) return <WiDaySunny size={80} />;
        if (iconCode.includes('02') || iconCode.includes('03') || iconCode.includes('04')) return <WiCloudy size={80} />;
        if (iconCode.includes('09') || iconCode.includes('10')) return <WiRain size={80} />;
        if (iconCode.includes('11')) return <WiThunderstorm size={80} />;
        if (iconCode.includes('13')) return <WiSnow size={80} />;
        if (iconCode.includes('50')) return <WiFog size={80} />;
        return <WiDaySunny size={80} />;
    }

    return (
        <div className='weather-card'>
            <div className='weather-header'>
                <h2>{weatherData.city}</h2>
                <div className='weather-icon'>{getWeatherIcon()}</div>
            </div>

            <div className='weather-main'>
                <div className='temperature'>
                    {Math.round(weatherData.temperature)}°C
                    <span className='feels-like'>
                        Feels like: {Math.round(weatherData.feels_like)}°C
                    </span>
                </div>
                <div className='description'>{weatherData.description}</div>
            </div>

            <div className='weather-details'>
                <div className='detail-item'>
                    <span className='detail-label'>Min Temp</span>
                    <span className='detail-value'>{Math.round(weatherData.temp_min)}°C</span>
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>Max Temp</span>
                    <span className='detail-value'>{Math.round(weatherData.temp_max)}°C</span>
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>Humidity</span>
                    <span className='detail-value'>{weatherData.humidity}%</span>
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>Wind Speed</span>
                    <span className='detail-value'>{weatherData.wind_speed} m/s</span>
                </div>
                <div className='detail-item'>
                    <span className='detail-label'>Pressure</span>
                    <span className='detail-value'>{weatherData.pressure} hPa</span>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;
