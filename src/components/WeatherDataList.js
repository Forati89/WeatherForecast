import React, {Component} from 'react';
import WeatherDataItem from './WeatherDataItem';

export default class WeatherDataList extends Component{

    render()
    {
        let weatherDetails = this.props.weatherTemp.map(weatherTemp =>{
            return (<WeatherDataItem weatherTemp = {weatherTemp}/>);
            
        });
        // let weatherTemp = this.props.weatherdata.main.map(weathertemp =>{
        //     return (<WeatherDataItem weathertemp = {weathertemp}/>);
            
        // });
        return(
            <div>
                <div>{weatherDetails}</div>
            </div>
        );
    }
}