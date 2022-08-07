import React from 'react'
import './historydetails.css'
import { useNavigate } from "react-router-dom"
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const HistoryDetails = () => {
    let navigate = useNavigate()
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="header">
                    <h1 className="text-center text-light"><strong>Datos de viaje:</strong></h1>
                    <h2 className="text-center text-light">21/12/2022</h2>
                </Col>
            </Row>
            <Row className="r-align justify-content-center">
                <Col className="preview">
                    <iframe src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed" title="idk" />
                    <Row clasName="justify-content-center">
                        <Col className="details">
                            <Col className="c-align">
                                <h3 className="text-right text-light">Dirección:</h3>
                                <h4 className="text-right text-light">P. Sherman, calle Wallaby, 42, Sydney</h4>
                                <h3 className="text-right text-light">Hora:</h3>
                                <h4 className="text-right text-light">13:50</h4>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="stats">
                            <h3 className="text-right text-light">Precio:</h3>
                            <h4 className="text-right text-light">$2.50</h4>
                            <h3 className="text-right text-light">Método de Pago:</h3>
                            <h4 className="text-right text-light">VISA-123</h4>
                        </Col>
                        <Col className="stats">
                            <h3 className="text-right text-light">Conductor:</h3>
                            <h4 className="text-right text-light"><img src="/icons/driver.svg" className="icon" alt="id" /> Freddie Dredd</h4>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="r-align justify-content-center">
                <Button onClick={() => navigate("/history")} className="back"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
            </Row>
        </Container>
    )
}

export default HistoryDetails
