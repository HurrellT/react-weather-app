import React from 'react';

const LocationButton = ({ value, label, updateSelectedCity }) => {
    return (
        <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button type="button" class="btn btn-light" 
                value={value}
                onClick={updateSelectedCity}>{label}</button>
                <br></br>
        </div>
    )
}

export default LocationButton;