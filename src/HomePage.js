import React, { Component } from 'react';
import Sidebar from './components/Sidebar';
import WeekContainer from './components/WeekContainer';
import apiConfig from './apiKeys'

class HomePage extends Component {

    state = {
        selectedCity: null,
        loading: true,
        weatherData: null,
        dailyData: null,
    }

    abortController = new AbortController();
    controllerSignal = this.abortController.signal;

    weatherInitialization = () => {

        const onSuccess = (position) => {
            this.getForecast(position.city)
        }

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccess,
                function (failure) {
                    fetch('http://api.ipapi.com/check?access_key=ec27b783b5f37a479b2b81fbc025a904&format=1')
                    .then(res => res.json())
                    .then(data => onSuccess(data))
                });
        }
        else {
            alert('Your browser does not support location tracking, or permission is denied.');
        }
    }

    getForecast(location) {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&APPID=${apiConfig.openWeatherMapKey}`

        fetch(forecastUrl, { signal: this.controllerSignal })
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    loading: false,
                    weatherData: data,
                    dailyData: dailyData,
                    selectedCity: location.city
                });
            },
                (error) => {
                    this.setState({
                        loading: false,
                        error
                    })
                })
    }

    componentWillUnmount() {
        this.abortController.abort();
    }

    componentDidMount() {
        this.weatherInitialization();
    }

    updateSelectedCity = event => {
        if (event.target.value === 'location') this.weatherInitialization();
        else this.getForecast(event.target.value);
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
                    <Sidebar updateSelectedCity={this.updateSelectedCity} />
                    <WeekContainer weatherData={this.state.weatherData} dailyData={this.state.dailyData}/>
                </div>
            )
        }
    }
}

export default HomePage;