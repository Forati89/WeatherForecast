import React, {Component} from 'react';
import WeatherDataItem from './WeatherDataItem';

export default class WeatherDataList extends Component{

    render()
    {
        let items = this.props.weatherdata.weather.map(weatherdata =>{
            return (<WeatherDataItem weatherdata = {weatherdata}/>);
        });
        return(
            <div>
                <div>{items}</div>
            </div>
        );
    }
}