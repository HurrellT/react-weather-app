import React from 'react';

const LocationLink = ({ value, label, updateWeekContainer }) => {
    return (
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button type="button" class="btn btn-light" 
                value={value}
                onClick={updateWeekContainer}>{label}</button>
                <br></br>
        </div>
    )
}

export default LocationLink;