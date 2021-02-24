import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (
        <footer className="footer bg-dark">
            <Container>
                <Row className="justify-content-lg-center">
                    <h2>Connect with Us!</h2>
                </Row>
                <br></br>
                <Row>
                    <Col>
                        <img src="/images/ITU4.png" className="pt-3 mr-5" style={{width:"250px", height:"108px"}}></img>
                    </Col>
                    <Col className="text-light border-right">
                        <h5 className="font-weight-bold">More</h5>
                        <h6>About ITU</h6>
                        <h6>Prospective Students</h6>
                        <h6>Find Faculty and Staff</h6>
                        <h6>Give</h6>
                        <h6>Spotlight</h6>
                    </Col>
                    <Col className="text-light border-right">
                        <h5 className="font-weight-bold">Student Resources</h5>
                        <h6>Majors</h6>
                        <h6>Departments</h6>
                        <h6>Meet the Staff</h6>
                    </Col>
                    <Col className="text-light">
                        <h5 className="font-weight-bold">Phone</h5>
                        <p>(555)123-4567</p>
                        <h5 className="font-weight-bold">Address</h5>
                        <p>1223 Tech Way
                            <br></br>
                            Detroit, MI 45678</p>
                    </Col>
                </Row>  
            </Container>
            <hr className="bg-light"></hr>
                <Row className="justify-content-center">
                    <p className="text-light"> &copy; 2021 InfoTech University </p>
                </Row>
        </footer>
    )
}

export default Footer;
/* export default withRouter(Footer); */