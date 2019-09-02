import React, {Component} from 'react';
import {Button, Container, Row, Col} from 'react-bootstrap';

export default class WeatherDataItem extends Component{


    render()
    {
        console.log(this.props.temp) // ???
        return(<div>
            <Container>
                <Row>
                <Col>
                
                        <p>{this.props.temp.temp_c}</p>
                     <Button variant="primary">Primary</Button>
           
                     </Col>
                     <Col>Hello World</Col>
                </Row>
            </Container>

         
        </div>);
    }
}