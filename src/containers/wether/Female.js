import React from "react";
import { connect } from "react-redux";
import { ListGroup, ListGroupItem, Row, Col } from "reactstrap";

import { getWeatherSelector } from "../../store/selectors";

const Female = ({ weather }) => {
  return (
    <div className="container">
      {console.log("Female", weather)}
      <ListGroup>
        <Row>
          <Col xs={{ size: 2, offset: 3 }}>City</Col>
          <Col xs="2">Temp</Col>
          <Col xs="2">Humidity</Col>
        </Row>
        {weather[0].map(item => {
          return (
            <ListGroupItem key={item.id}>
              <Row>
                <Col xs={{ size: 2, offset: 3 }}>{item.name}</Col>
                <Col xs="2">{item.main.temp} C</Col>
                <Col xs="2">{item.main.humidity} %</Col>
              </Row>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default connect(
  state => {
    return {
      weather: getWeatherSelector(state)
    };
  },
  null
)(Female);
