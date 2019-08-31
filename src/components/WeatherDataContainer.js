import React, {Component} from 'react';

export default class WeatherDataContainer extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            weatherdata: [],
            isLoaded: false
        }
    }

    componentDidMount()
    {
        fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=9abd7b5ca967276c7580776343f41010')
        .then(res => res.json())
        .then(json => {
            this.setState({
            isLoaded: true,
            weatherdata: json
        })
    });
    }
    
    render()
    {
        var {isLoaded, weatherdata} = this.state;
        if(!isLoaded)
        {
            return (<div>nothing yet...</div>)
        }
        else
        {
        return(
        <div>
        <h4>Data Loaded</h4>
        <ul>
            {weatherdata.map(data => (
                <li>{data}</li>
            ))};
        </ul>
        </div>);
    }
}
}