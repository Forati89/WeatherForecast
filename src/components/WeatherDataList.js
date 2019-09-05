import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';

export default class WeatherDataList extends Component {

    render() {

        //render props to Container
        return (
            <React.Fragment>
                <Row>
                    <Col>
                    <h1>{this.props.currCNM}</h1>
                    <h3><b>{this.props.currCLTMP} &#8451;</b></h3>
                    <Image src={this.props.currWICON} rounded />

                    </Col>
                    <Col>
                    <h5>Lokal Tid & Datum</h5>
                    <h3>{this.props.currCLT}</h3>
                    </Col>

                </Row>
                
            </React.Fragment>
        );
    }
}