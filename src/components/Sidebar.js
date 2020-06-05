import React from 'react';
import LocationLink from './LocationLink'

const Sidebar = ({updateWeekContainer}) => {
    return (
        <div class="col-md-2">
            <div class="sidebar">
                <LocationLink value="location" label="Current Location" updateWeekContainer={updateWeekContainer}/>
                <LocationLink value="Buenos Aires" label="Buenos Aires" updateWeekContainer={updateWeekContainer}/>
                <LocationLink value="Vancouver" label="Vancouver" updateWeekContainer={updateWeekContainer}/>
                <LocationLink value="New York" label="New York" updateWeekContainer={updateWeekContainer}/>
                <LocationLink value="La Plata" label="La Plata" updateWeekContainer={updateWeekContainer}/>
            </div>
        </div>
    )
}

export default Sidebar;