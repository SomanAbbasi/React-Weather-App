import React, {useState} from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import axios from 'axios'

function App() {
  const [weatherData,setWeatherData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);

  const fetchWeather=async(city)=>{
    setLoading(true);
    setError(null);
    try{
      const response=await axios.get(`http://localhost:5000/api/weather?city=${city}`);
      setWeatherData(response.data);
    }catch(err){
      setError('Failed to fetch weather data');
      setWeatherData(null);
    }
    finally{
      setLoading(false);
    }
  }

 return(
  <div>
    <div>
       <h1 className='app-title'>Weather ForeCast</h1>
       <SearchBar onSearch={fetchWeather}/>

       {loading && <div className='loading'> Loading ...</div>}
       {error && (
        <div className='error-message'> {error}</div>
       )}
       
       {
        weatherData && <WeatherCard weatherData={weatherData}/>
       }
    </div>
  </div>
 )

}

export default App
