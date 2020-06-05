import React from 'react';
import LocationLink from './LocationLink'

const Sidebar = ({updateSelectedCity}) => {
    return (
        <div class="col-md-2">
            <div class="sidebar">
                <LocationLink value="location" label="Current Location" updateSelectedCity={updateSelectedCity}/>
                <LocationLink value="Buenos Aires" label="Buenos Aires" updateSelectedCity={updateSelectedCity}/>
                <LocationLink value="Vancouver" label="Vancouver" updateSelectedCity={updateSelectedCity}/>
                <LocationLink value="New York" label="New York" updateSelectedCity={updateSelectedCity}/>
                <LocationLink value="La Plata" label="La Plata" updateSelectedCity={updateSelectedCity}/>
            </div>
        </div>
    )
}

export default Sidebar;