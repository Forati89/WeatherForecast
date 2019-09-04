import React from 'react';
import WeatherDataContainer from './components/WeatherDataContainer';
import { Container,Row, Col } from 'reactstrap';
import { continueStatement } from '@babel/types';

function App() {
  return (
    <div className="App">
      <Container>
      <Row style={{backgroundColor: 'black', height: 120}} >
      <Col className="text-center my-auto"><h2 style={{color: 'white'}} >WeatherApp</h2></Col>
        
      </Row>
      <Row>
      <Col className="text-center my-auto"> <WeatherDataContainer /> </Col>
      </Row>
      <Container>
        <Row>
        <Col>
          <br/>
        </Col>
        </Row>
      </Container>
      <Row style={{backgroundColor: 'black', height: 120}}>
      <Col className="text-center my-auto">
      <h1 style={{color: 'white'}} ><i>Hassan Allak 	&copy;</i></h1>
      </Col>
      </Row>
      </Container>
    </div>
  );
}

export default App;
