import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class WeatherFiveDay extends Component {

    render() {


        return (
            <React.Fragment>
            <Row>
            <Col>
            <b>Datum: {this.props.d1D}</b>
            <Image src={this.props.d1CI} rounded />
            <b></b>
            <p>Max Tempratur: <b>{this.props.d1MXT}</b></p>
            <p>Min Tempratur: <b>{this.props.d1MNT}</b></p>
            </Col>
            <Col >
            <b>Datum: {this.props.d2D}</b>
            <Image src={this.props.d2CI} rounded />
            <b></b>
            <p>Max Tempratur: <b>{this.props.d2MXT}</b></p>
            <p>Min Tempratur: <b>{this.props.d2MNT}</b></p>
            </Col>
            <Col >
            <b>Datum: {this.props.d3D}</b>
            <Image src={this.props.d3CI} rounded />
            <p>Max Tempratur: <b>{this.props.d3MXT}</b></p>
            <p>Min Tempratur: <b>{this.props.d3MNT}</b></p>
            </Col>
            <Col >
            <b>Datum: {this.props.d4D}</b>
            <Image src={this.props.d4CI} rounded />
            <p>Max Tempratur: <b>{this.props.d4MXT}</b></p>
            <p>Min Tempratur: <b>{this.props.d4MNT}</b></p>
            </Col>
            <Col >
            <b>Datum: {this.props.d5D}</b>
            <Image src={this.props.d5CI} rounded />
            <p>Max Tempratur: <b>{this.props.d5MXT}</b></p>
            <p>Min Tempratur: <b>{this.props.d5MNT}</b></p>
            </Col>
            </Row>
            </React.Fragment>

        );
    }


}