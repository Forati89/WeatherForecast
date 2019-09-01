import React, {Component} from 'react';
import WeatherDataItem from './WeatherDataItem';

export default class WeatherDataList extends Component{

    render()
    {
        let weatherDetails = this.props.weatherdata.weather.map(weatherdata =>{
            return (<WeatherDataItem weatherdata = {weatherdata}/>);
            
        });
        let weatherTemp = this.props.weatherdata.main.map(weathertemp =>{
            return (<WeatherDataItem weathertemp = {weathertemp}/>);
            
        });
        return(
            <div>
                <div>{weatherDetails}</div>
                <div>{weatherTemp}</div>
            </div>
        );
    }
}