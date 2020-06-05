import React from 'react';
import apiConfig from '../apiKeys'
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';

class WeekContainer extends React.Component {

    state = {
        fullData: "",
        dailyData: [],
        degreeType: "celsius",
        city: "",
        loading: true,
        selectedCity: this.props.selectedCity
    }

    componentDidMount = () => {
        this.setState({
            loading: true
        }, this.getForecast(this.props.selectedCity))
    }

    componentDidUpdate = () => {
        this.getForecast(this.props.selectedCity);    
    }

    getForecast(location) {
        const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&APPID=${apiConfig.openWeatherMapKey}`

        fetch(forecastUrl)
            .then(res => res.json())
            .then(data => {
                const dailyData = data.list.filter(reading => reading.dt_txt.includes("18:00:00"))
                this.setState({
                    fullData: data,
                    dailyData: dailyData,
                    city: data.city,
                    loading: false,
                    selectedCity: location
                })
            })
    }

    dayCards() {
        const dayCards = this.state.dailyData.map((reading, index) =>
            <DayCard reading={reading} key={index} degreeType={this.state.degreeType} />);
        return dayCards;
    }


    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        })
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
                <div className="col-md-10">
                    <h4 className="display-4 cityTitle">{this.state.city.name}, {this.state.city.country}</h4>
                    <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} />
                    <div className="row justify-content-center">{this.dayCards()}</div>
                </div>
            )
        }
    }
}
export default WeekContainer;