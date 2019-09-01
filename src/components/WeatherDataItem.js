import React, {Component} from 'react';

export default class BlogListItem extends Component{


    render()
    {
        return(<React.Fragment>
            <div style={{border:"solid"}}>
            <h3>{this.props.weatherdata.id}</h3>
            <p>{this.props.weatherdata.description}</p>
            <p>{this.props.weathertemp.humidity}</p>
            

            </div>
        </React.Fragment>);
    }
}