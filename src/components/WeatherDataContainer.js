import React, {Component} from 'react';
import WeatherDataList from './WeatherDataList';
import WeatherFiveDay from './WeatherFiveDay'

export default class WeatherDataContainer extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weatherdata: [ ],
            weatherTemp: [ ],
            isLoaded: true,
            fiveDaysData: [{
                DayOneMaxTemp:"", DayOneMinTemp: "", DayOneCondIcon: "", DayOneDate:"",
                DayTwoMaxTemp:"", DayTwoMinTemp: "", DayTwoCondIcon: "", DayTwoDate:"",
                DayThreeMaxTemp:"", DayThreeMinTemp: "", DayThreeCondIcon: "", DayThreeDate:"",
                DayFourMaxTemp:"", DayFourMinTemp: "", DayFourCondIcon: "", DayFourDate:"",
                DayFiveMaxTemp:"", DayFiveMinTemp: "", DayFiveCondIcon: "", DayFiveDate:""
        }]}
    
        
    }

    componentDidMount()
    {
        const url = "http://api.apixu.com/v1/current.json?key=c0a69043db744ad6954192413190209&q=Stockholm";
        fetch(url)
        .then((response) => response.json())
        .then(json =>         this.setState({
            weatherdata: json,
            isLoaded: false,
            weatherTemp: json.current // ???
         }) )

        const urlFiveDays = "http://api-cdn.apixu.com/v1/forecast.json?key=c0a69043db744ad6954192413190209&q=Stockholm&days=5";
        fetch(urlFiveDays)
        .then((responseFiveDays) => responseFiveDays.json())
        .then( json =>       this.setState({
            //day one
            fiveDaysDataDayOneMaxTemp: json.forecast.forecastday[0].day.maxtemp_c,
            fiveDaysDataDayOneMinTemp: json.forecast.forecastday[0].day.mintemp_c,
            fiveDaysDataDayOneCondIcon: json.forecast.forecastday[0].day.condition.icon,
            fiveDaysDataDayOneDate: json.forecast.forecastday[0].date,
            // day two
            fiveDaysDataDayTwoMaxTemp: json.forecast.forecastday[1].day.maxtemp_c,
            fiveDaysDataDayTwoMinTemp: json.forecast.forecastday[1].day.mintemp_c,
            fiveDaysDataDayTwoCondIcon: json.forecast.forecastday[1].day.condition.icon,
            fiveDaysDataDayTwoDate: json.forecast.forecastday[1].date,
            // day three
            fiveDaysDataDayThreeMaxTemp: json.forecast.forecastday[2].day.maxtemp_c,
            fiveDaysDataDayThreeMinTemp: json.forecast.forecastday[2].day.mintemp_c,
            fiveDaysDataDayThreeCondIcon: json.forecast.forecastday[2].day.condition.icon,
            fiveDaysDataDayThreeDate: json.forecast.forecastday[2].date,
            // day four
            fiveDaysDataDayFourMaxTemp: json.forecast.forecastday[3].day.maxtemp_c,
            fiveDaysDataDayFourMinTemp: json.forecast.forecastday[3].day.mintemp_c,
            fiveDaysDataDayFourCondIcon: json.forecast.forecastday[3].day.condition.icon,
            fiveDaysDataDayFourDate: json.forecast.forecastday[3].date,
            // day five
            fiveDaysDataDayFiveMaxTemp: json.forecast.forecastday[4].day.maxtemp_c,
            fiveDaysDataDayFiveMinTemp: json.forecast.forecastday[4].day.mintemp_c,
            fiveDaysDataDayFiveCondIcon: json.forecast.forecastday[4].day.condition.icon,
            fiveDaysDataDayFiveDate: json.forecast.forecastday[4].date

        }))
    }
    
    
    render()
    {
        console.log(this.state.fiveDaysData.map(data=>{return(data)}))
        return(
            <WeatherFiveDay

             d1MXT = {this.state.fiveDaysDataDayOneMaxTemp}
             d1MNT = {this.state.fiveDaysDataDayOneMinTemp}
             d1D   = {this.state.fiveDaysDataDayOneDate}
             d1CI  = {this.state.fiveDaysDataDayOneCondIcon}

             d2MXT = {this.state.fiveDaysDataDayTwoMaxTemp}
             d2MNT = {this.state.fiveDaysDataDayTwoMinTemp}
             d2D   = {this.state.fiveDaysDataDayTwoDate}
             d2CI  = {this.state.fiveDaysDataDayTwoCondIcon}

             d3MXT = {this.state.fiveDaysDataDayThreeMaxTemp}
             d3MNT = {this.state.fiveDaysDataDayThreeMinTemp}
             d3D   = {this.state.fiveDaysDataDayThreeDate}
             d3CI  = {this.state.fiveDaysDataDayThreeCondIcon}

             d4MXT = {this.state.fiveDaysDataDayFourMaxTemp}
             d4MNT = {this.state.fiveDaysDataDayFourMinTemp}
             d4D   = {this.state.fiveDaysDataDayFourDate}
             d4CI  = {this.state.fiveDaysDataDayFourCondIcon}

             d5MXT = {this.state.fiveDaysDataDayFiveMaxTemp}
             d5MNT = {this.state.fiveDaysDataDayFiveMinTemp}
             d5D   = {this.state.fiveDaysDataDayFiveDate}
             d5CI  = {this.state.fiveDaysDataDayFiveCondIcon}

            />
        
        );
            

    }
}
