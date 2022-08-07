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
            <Row className="r-align justify-content-left">
                <Col xs="auto">
                    <Button onClick={() => navigate("/menu")} className="back"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
                </Col>
            </Row>
            <Row className="r-align justify-content-center">
                <Col className="selection">
                    <Row className="r-align justify-content-center">
                        <Button onClick={() => navigate("/")} className="choice btn-outline-info">
                            <Row className="justify-content-center">
                                <Col xs lg="2" className="t-align justify-content-center">
                                    <img src="/icons/car.svg" className="img-fluid" alt="car" />
                                </Col>
                                <Col className="t-align">
                                    <h3 className="text-left text-light">Vity económico</h3>
                                    <h4 className="text-left text-light">Más por menos</h4>
                                </Col>
                            </Row>
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Travel
