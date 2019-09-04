import React, {Component} from 'react';
import WeatherDataItem from './WeatherDataItem';
import WeatherFiveDay from './WeatherFiveDay'

export default class WeatherDataList extends Component{

    render()
    {

        //render props to Container
        return(
            <div>
                {this.props.d1MXT}
            </div>
        );
    }
}