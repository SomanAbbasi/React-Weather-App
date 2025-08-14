
import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
function SearchBar({ onSearch }) {
    const [city, setCity] = useState('');

    function handleFormSubit(event) {
        event.preventDefault(); //Stop Browser from refreshing pages
        const trimmedCity = city.trim();

        if (trimmedCity.length > 0) {
            onSearch(trimmedCity);
        }

    }

    function handleInputChange(event) {
        setCity(event.target.value);
    }
    return (

        <form className='search-form' onClick={handleFormSubit}>
            <div className='search-container'>
                <input type="text" placeholder='Enter City name ' className='search-input'
                    onChange={handleInputChange} />

                <button type='submit' className='search-button'><FaSearch /></button>


            </div>
        </form>
    )
}

export default SearchBar;

