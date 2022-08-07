import React from 'react'
import './profile.css'
import { useNavigate } from "react-router-dom"
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Profile = () => {
    let navigate = useNavigate()
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="header">
                    <h1 className="text-center text-light"><strong>Perfil</strong></h1>
                    <h2 className="text-center text-light">Consulta tu información personal</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="personal-stuff">
                    <Row clasName="justify-content-center">
                        <img src="/icons/pfpic.svg" className="pic" alt="pic" />
                        <h2 className="text-center text-light">Kevin Valle</h2>
                        <Col className="details">
                            <Col className="c-align">
                                <h3 className="text-right text-light">Edad:</h3>
                                <h4 className="text-right text-light">21 años</h4>
                            </Col>
                            <Col className="c-align">
                                <h3 className="text-right text-light">Sexo:</h3>
                                <h4 className="text-right text-light">Hombre</h4>
                            </Col>
                        </Col>
                        <Col className="details">
                            <Col className="c-align">
                                <h3 className="text-right text-light">Cedula:</h3>
                                <h4 className="text-right text-light"><img src="/icons/id.svg" className="icon" alt="id" /> 0987654321</h4>
                            </Col>
                            <Col className="c-align">
                                <h3 className="text-right text-light">Método de Pago:</h3>
                                <h4 className="text-right text-light"><img src="/icons/card.svg" className="icon" alt="card" /> 0987-6543</h4>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <Col className="details">
                            <Col className="c-align">
                                <h3 className="text-right text-light">Número de teléfono:</h3>
                                <h4 className="text-right text-light">09876543</h4>
                            </Col>
                            <Col className="c-align">
                                <h3 className="text-right text-light">Correo electrónico:</h3>
                                <h4 className="text-right text-light">k-g1@hotmail.com</h4>
                            </Col>
                        </Col>
                    </Row>
                    <Row className="justify-content-center">
                        <h2 className="text-center text-light">Viajes:</h2>
                        <Col className="stats">
                            <h3 className="text-center text-light">Realizados</h3>
                            <h4 className="text-center text-light">12</h4>
                        </Col>

                        <Col className="stats">
                            <h3 className="text-center text-light">Anulados</h3>
                            <h4 className="text-center text-light">5</h4>
                        </Col>

                    </Row>
                </Col>
            </Row>
            <Row className="r-align justify-content-center">
                <Button onClick={() => navigate("/menu")} className="back"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
            </Row>
        </Container>
    )
}

export default Profile
