import React from 'react';
import DayCard from './DayCard';
import DegreeToggle from './DegreeToggle';
import CurrentDayCard from './CurrentDayCard';

class WeekContainer extends React.Component {

    state = {
        degreeType: "celsius",
    }

    dayCards() {
        const dayCards = this.props.dailyData.map((reading, index) =>
            <DayCard reading={reading} key={index} degreeType={this.state.degreeType} />);
        return dayCards;
    }

    updateForecastDegree = event => {
        this.setState({
            degreeType: event.target.value
        })
    }

    render() {
        return (
            <div className="col-md-10" >
                <h4 className="display-4 cityTitle">{this.props.weatherData.city.name}, {this.props.weatherData.city.country}</h4>
                <DegreeToggle degreeType={this.state.degreeType} updateForecastDegree={this.updateForecastDegree} />
                <CurrentDayCard reading={this.props.weatherData.list[0]} index={0} degreeType={this.state.degreeType}/>
                <div className="row justify-content-center">{this.dayCards()}</div>
            </div>
        )
    }
}
export default WeekContainer;