import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import WeekContainer from './components/WeekContainer';

class HomePage extends Component {

    state = {
        selectedCity: "",
        loading: true
    }

    componentDidMount() {
        this.getLocation();
    }

    async getLocation() {
        const response = await fetch('http://api.ipapi.com/check?access_key=ec27b783b5f37a479b2b81fbc025a904&format=1');
        const json = await response.json();
        this.setState({
            selectedCity: json.city,
            loading: false
        });
    }

    updateWeekContainer = event => {
        const value = event.target.value;
        
        if (value === 'location') {
            this.getLocation();
        }
        else {
            this.setState({
                selectedCity: event.target.value
            })
        }
    }

    render() {
        if (this.state.loading) {
            return (
                <div className="col-md-10">
                    <h4 className="display-4 cityTitle">Loading...</h4>
                </div>
            )
        }
        else {
            return (
                <div className="row">
                    <Sidebar updateWeekContainer={this.updateWeekContainer} />
                    <WeekContainer selectedCity={this.state.selectedCity} />
                </div>
            )
        }
    }
}

export default HomePage;