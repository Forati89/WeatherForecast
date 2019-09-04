import React, { Component } from 'react';
import { Button, Container, Row, Col, Image } from 'react-bootstrap';

export default class WeatherFiveDay extends Component {

    render() {


        return (
            <React.Fragment>
            <Row>
            <Col sm-2>
            <p>Datum: {this.props.d1D}</p>
            <p>Max Tempratur: {this.props.d1MXT}</p>
            <p>Min Tempratur: {this.props.d1MNT}</p>
            <Image src={this.props.d1CI} rounded />
            </Col>
            <Col sm-2>
            <p>Datum: {this.props.d2D}</p>
            <p>Max Tempratur: {this.props.d2MXT}</p>
            <p>Min Tempratur: {this.props.d2MNT}</p>
            <Image src={this.props.d2CI} rounded />
            </Col>
            <Col sm-2>
            <p>Datum: {this.props.d3D}</p>
            <p>Max Tempratur: {this.props.d3MXT}</p>
            <p>Min Tempratur: {this.props.d3MNT}</p>
            <Image src={this.props.d3CI} rounded />
            </Col>
            <Col sm-2>
            <p>Datum: {this.props.d4D}</p>
            <p>Max Tempratur: {this.props.d4MXT}</p>
            <p>Min Tempratur: {this.props.d4MNT}</p>
            <Image src={this.props.d4CI} rounded />
            </Col>
            <Col sm-2>
            <p>Datum: {this.props.d5D}</p>
            <p>Max Tempratur: {this.props.d5MXT}</p>
            <p>Min Tempratur: {this.props.d5MNT}</p>
            <Image src={this.props.d5CI} rounded />
            </Col>
            </Row>
            </React.Fragment>

        );
    }


}