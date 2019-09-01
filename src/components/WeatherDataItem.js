import React, {Component} from 'react';

export default class WeatherDataItem extends Component{


    render()
    {
        return(<React.Fragment>
            <div style={{border:"solid"}}>
                <p>{this.props.weatherTemp.temp}</p>
                <p>{this.props.weatherTemp.temp_min}</p>
                <p>{this.props.weatherTemp.temp_max}</p>
            </div>
         
        </React.Fragment>);
    }
}