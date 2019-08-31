import React, {Component} from 'react';

export default class WeatherDataList extends Component{

    render()
    {
        let items = this.props.value.map(weatherdata =>{
            return (console.log({weatherdata}.value));
        });
        return(
            <div>
                <div>{items}</div>
            </div>
        );
    }
}