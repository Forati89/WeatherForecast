import React, {Component} from 'react';
import WeatherDataList from './WeatherDataList';

export default class WeatherDataContainer extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weatherdata: [],
            isLoaded: true
        }
    }

    async componentDidMount()
    {
        const url = "http://api.openweathermap.org/data/2.5/weather?q=Stockholm,swe&appid=9abd7b5ca967276c7580776343f41010";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({weatherdata: data, isLoaded: false })
    }
    
    
    render()
    {
        return(
            <div>
                { 
                    this.state.isLoaded  || !this.state.weatherdata ? (
                        <div>loading...</div>
                    ) : ( 
                      <WeatherDataList weatherdata = {this.state.weatherdata}/>
                    )}
            </div>
        
        );
            

    }
}
