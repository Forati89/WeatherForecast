import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

export default class WeatherFiveDay extends Component {

    render() {


        return (
            <div>
                            <p>{this.props.fiveDays.temp_c}</p>



            </div>

        );
    }


}