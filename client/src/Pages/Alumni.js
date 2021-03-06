import axios from 'axios';
import React, { useEffect, useState, Link } from 'react';
import { Jumbotron, Container, Form, Row, Column, Col, Button, Card, List, ListGroup, ListGroupItem } from 'react-bootstrap';
import '../alumni.css';
import logo from '../images/ITUwhite.png';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'


const ps = new PerfectScrollbar('#container');

function Alumni() {
    const [ donors, setDonors ] = useState([]);
    const [ name, setName ] = useState("");
    const [ amount, setAmount ] = useState(0);
    const [ nuDonor, setNuDonor ] = useState({});

    useEffect(() => {
        axios.get('/api/people/donors').then(res => {
            console.log(res);
            setDonors(res.data);
        })
    }, [nuDonor]);

    function changeName(e) {
        const newName = e.target.value;
        setName(newName);
    }

    function changeAmount(e) {
        const newAmount = e.target.value;
        setAmount(newAmount);
    }

    function onSubmit(e) {
      e.preventDefault();
      const newDonor = {
        name: name,
        amount: parseInt(amount)
      };
        axios.post('/api/people/donors', newDonor).then(res => {
            console.log(res);
        })
        .then(() => setNuDonor(newDonor))
        .catch(err => console.log(err));
    }

    return(
    <div>
      <Jumbotron fluid className="jAlumni"></Jumbotron>
      <Container>
        <Row className="justify-content-center">
          <Col lg={9}>
            <div>
              <h1 className="h1Alum"><i>Make a</i> <b>DIFFERENCE</b> <i>by</i> <b>GIVING</b> <i>to ITU</i></h1>
              <h4 className="h4Alum">You can make a difference for ITU students. Your generosity can change a life!</h4>
              <br></br>
              <h2 className="h2Alum">Support InfoTech Students</h2>
              <p className="pAlum">
              Gifts to the ITU Fund provide undergraduate scholarships and financial aid for ITU students who need our help. 
              Gifts will help support students who are challenged with accessing basic necessities such as housing, food, medical 
              care or required technology resources required to ensure reliable connectivity for remote education.
              </p>
            </div>

            <br></br>

            <div>
              <h2 className="h2Alum">Make a Gift by Mail:</h2>
              <p><i>*Please make all checks payable to InfoTech University Fund and mail to:</i></p>
              <p className="pAlum">
                InfoTech University Foundation
                <br></br>
                1223 Tech Way
                <br></br>
                Detroit, MI 45678
              </p>
            </div>

            <br></br>

            <div id="donateNow">
              <h2 className="h2Alum">Make a Gift Online:</h2>
                <Form noValidate onSubmit={onSubmit}>
                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Form.Label column sm={2}>Name</Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                        onChange={changeName}
                        value={name}                
                        id="name"
                        type="text"
                        placeholder="First and Last Name"
                        />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalPassword">
                    <Form.Label column sm={2}>Amount</Form.Label>
                    <Col sm={10}>
                      <Form.Control 
                        onChange={changeAmount}
                        value={amount}
                        id="amount"
                        type="number"
                        placeholder="$1500"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                      <Form.Check label="Make the amount above a monthly recurring gift." />
                      <Form.Check label="Establish this gift “In Memory” or “In Honor” of an individual(s)." />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formHorizontalEmail">
                    <Col sm={3}>
                      <Form.Control as="select">
                        <option>In Memory of</option>
                        <option>In Honor of</option>
                      </Form.Control>
                    </Col>
                    <Col>
                      <Form.Control type="text" />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={3}>
                      <Button type="submit">Submit</Button>
                    </Col>
                  </Form.Group>
                </Form>
            </div>
            <br></br>
          </Col>

          <Col lg={3}>
            <Card className="cardAlum text-center" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={logo} />
              <Card.Body>
                <a href="#donateNow"><Button variant="primary">GIVE NOW</Button></a>
              </Card.Body>
            </Card>

            <br></br>

            <h2 className="dAlum text-center">DONORS</h2>
            <Container className="SBDonors">
              <PerfectScrollbar>
                <ListGroup>
                  {donors.map(giver => {
                        return (
                        <ListGroup.Item>
                          <Row>
                            <Col xs={2}>
                              <span className="iAlum"><i class="fas fa-user"></i></span>
                            </Col>
                            <Col>
                              {giver.name}
                              <br></br>
                              ${giver.amount}
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      )
                  })}
                </ListGroup>
              </PerfectScrollbar>
            </Container>
          </Col>
        </Row>
      </Container>
      <br></br>
    </div>
    )
}

export default Alumni;