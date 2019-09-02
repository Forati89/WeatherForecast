import React, {Component} from 'react';
import WeatherDataList from './WeatherDataList';

export default class WeatherDataContainer extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weatherdata: [ ],
            weatherTemp: [ ],
            isLoaded: true,
            fiveDaysData: [] 
        }
    }

    async componentDidMount()
    {
        const url = "http://api.apixu.com/v1/current.json?key=c0a69043db744ad6954192413190209&q=Stockholm";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            weatherdata: data,
            isLoaded: false,
            weatherTemp: data.current // ???
            

         })
        const urlFiveDays = "http://api-cdn.apixu.com/v1/forecast.json?key=c0a69043db744ad6954192413190209&q=Stockholm&days=5";
        const responseFiveDays = await fetch(urlFiveDays);
        const dataFiveDays = await responseFiveDays.json();
        this.setState({
            fiveDaysData: dataFiveDays
            
        })
        
    }
    
    
    render()
    {


        return(
            <WeatherDataList
             data = {this.state.weatherdata}
             temp = {this.state.weatherTemp}
             fiveDays = {this.state.fiveDaysData}
            />
        
        );
            

    }
}
