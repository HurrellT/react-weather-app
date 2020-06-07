import React from 'react';
import LocationButton from './LocationButton'

const Sidebar = ({updateSelectedCity}) => {
    return (
        <div class="col-md-2">
            <div class="sidebar">
                <LocationButton value="location" label="Current Location" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value={'{"latitude": "-34.6132", "longitude": "-58.3772"}'} label="Buenos Aires" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value={'{"latitude": "-34.9215", "longitude": "-57.9545"}'} label="La Plata" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value={'{"latitude": "49.2497", "longitude": "-123.1193"}'} label="Vancouver" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value={'{"latitude": "40.7143", "longitude": "-74.006"}'} label="New York" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value={'{"latitude": "51.5085", "longitude": "-0.1257"}'} label="London" updateSelectedCity={updateSelectedCity}/>
            </div>
        </div>
    )
}

export default Sidebar;