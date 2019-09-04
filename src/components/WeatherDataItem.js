import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';

export default class WeatherDataItem extends Component{


    render()
    {
        console.log(this.props.data)
        return(<React.Fragment>
                <Row>
                <Col>
                </Col>
                     <Col>Hello World</Col>
                </Row>

         
        </React.Fragment>);
    }
}