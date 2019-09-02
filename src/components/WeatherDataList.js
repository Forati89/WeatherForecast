import React, {Component} from 'react';
import WeatherDataItem from './WeatherDataItem';
import WeatherFiveDay from './WeatherFiveDay'

export default class WeatherDataList extends Component{

    render()
    {
        // getting temp details from props
        let tempDetails = this.props.temp;
        let weatherDataD = this.props.data;
        let five = this.props.fiveDays;


        //render props to Container
        return(
            <div>
               <WeatherDataItem
                temp = {tempDetails}
                data = {weatherDataD}
                />
                <WeatherFiveDay
                fiveDays = {five}
                 />
            </div>
        );
    }
}