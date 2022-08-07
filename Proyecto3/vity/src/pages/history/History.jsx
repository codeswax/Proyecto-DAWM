import React from 'react'
import './history.css'
import { useNavigate } from "react-router-dom"
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const History = () => {
    let navigate = useNavigate()
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="header">
                    <h1 className="text-center text-light"><strong>Historial</strong></h1>
                    <h2 className="text-center text-light">Revisa detalles de tus viajes pasados.</h2>
                </Col>
            </Row>
            <Row className="r-align justify-content-center">
                <Button onClick={() => navigate("/historydetails")} className="trip">
                    <Row className="justify-content-center">
                        <Col className="c-align justify-content-center">
                            <h3 className="text-left text-light">21/12/2022</h3>
                            <h4 className="text-left text-light">Vity económico</h4>
                            <h4 className="text-left text-light">$</h4>
                        </Col>
                    </Row>
                </Button>
            </Row>
            <Row className="r-align justify-content-center">
                <Button onClick={() => navigate("/menu")} className="back"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
            </Row>
        </Container>
    )
}

export default History
