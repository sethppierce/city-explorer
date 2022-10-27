import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion';


export default class WeatherAccord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventKey: '1'
    }
  }

  handleAccord = (e) => {
    if(e.target.eventKey === 0){
      this.setState({eventKey: 1})
    }
    if(e.target.eventKey === 1){
      this.setState({eventKey: 0})
    }
  }

  render() {
    return (
      <Accordion defaultActiveKey='0'>
        <Accordion.Item id='accordianItem' eventKey={this.state.eventKey} onSelect={this.handleAccord}>
          <Accordion.Header>{this.props.date}</Accordion.Header>
          <Accordion.Body>
            {this.props.description}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    )
  }
}
