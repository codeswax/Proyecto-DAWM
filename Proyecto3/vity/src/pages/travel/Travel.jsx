import React from 'react'
import './travel.css'
import { useNavigate } from "react-router-dom"
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Travel = () => {
    let navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col className="header text-center">
                    <h1 className="text-light"><strong>Viaje</strong></h1>
                    <h2 className="text-light">Elige un plan.</h2>
                </Col>
            </Row>
            <Row className="t-align">
                <Col className="selection">
                    <Row className="c-align justify-content-center">
                        <Button onClick={() => navigate("/")} className="choice">
                            <Row className="c-align">
                                <Col xs lg="2" className="t-align">
                                    <img src="/icons/car.svg" className="img-fluid" alt="car" />
                                </Col>
                                <Col xs lg="7" className="t-align">
                                    <h3 className="text-light">Basic</h3>
                                    <p className="text-light">Más por menos</p>
                                </Col>
                                <Col xs lg="1" className="t-align">
                                    <h3 className="text-light">Precio</h3>
                                    <p className="text-light">$3,00</p>
                                </Col>
                            </Row>
                        </Button>
                        <Button onClick={() => navigate("/")} className="choice">
                            <Row className="c-align">
                                <Col xs lg="2" className="t-align">
                                    <img src="/icons/exp.svg" className="img-fluid" alt="car2" />
                                </Col>
                                <Col xs lg="7" className="t-align">
                                    <h3 className="text-light ">Royal</h3>
                                    <p className="text-light">Date un lujo</p>
                                </Col>
                                <Col xs lg="1" className="t-align">
                                    <h3 className="text-light">Precio</h3>
                                    <p className="text-light">$6,00</p>
                                </Col>
                            </Row>
                        </Button>
                        <Button onClick={() => navigate("/")} className="choice">
                            <Row className="c-align">
                                <Col xs lg="2" className="t-align">
                                    <img src="/icons/nat.svg" className="img-fluid" alt="car3" />
                                </Col>
                                <Col xs lg="7" className="t-align">
                                    <h3 className="text-light">Eco</h3>
                                    <p className="text-light">Sin polución</p>
                                </Col>
                                <Col xs lg="1" className="t-align">
                                    <h3 className="text-light">Precio</h3>
                                    <p className="text-light">$4,00</p>
                                </Col>
                            </Row>

                        </Button>
                    </Row>
                </Col>
            </Row>
            <Row className="c-align">
                <Col>
                    <Button onClick={() => navigate("/menu")} className="fixed-bottom footer"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Travel
