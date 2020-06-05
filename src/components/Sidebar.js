import React from 'react';
import LocationButton from './LocationButton'

const Sidebar = ({updateSelectedCity}) => {
    return (
        <div class="col-md-2">
            <div class="sidebar">
                <LocationButton value="location" label="Current Location" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value="Buenos Aires" label="Buenos Aires" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value="La Plata" label="La Plata" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value="Vancouver" label="Vancouver" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value="New York" label="New York" updateSelectedCity={updateSelectedCity}/>
                <LocationButton value="London" label="London" updateSelectedCity={updateSelectedCity}/>
            </div>
        </div>
    )
}

export default Sidebar;