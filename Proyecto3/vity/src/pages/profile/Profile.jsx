import React from 'react'
import './profile.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Profile = () => {
    const [profileStuff, setProfileStuff] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/profile").then((response) => {
            setProfileStuff(response.data)
        })
    }, [])

    let navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col className="header text-center">
                    <h1 className="text-light"><strong>Perfil</strong></h1>
                    <h2 className="text-light">Revisa tus datos personales.</h2>
                </Col>
            </Row>
            <Row className="c-align justify-content-center">
                {profileStuff.map((value, key) => {
                    return  <Col className="personal-stuff">
                            <Row>
                                <img src="/icons/pfpic.svg" className="pic" alt="pic" />
                                <h2 className="text-center text-light">{value.fkCliente.nombre} {value.fkCliente.apellido}</h2>
                                <Col className="details">
                                    <Col className="c-align">
                                        <h3 className="text-light">Edad:</h3>
                                        <p className="text-light">{value.fkCliente.edad} años</p>
                                    </Col>
                                    <Col className="c-align">
                                        <h3 className="text-light">Sexo (H/M): </h3>

                                        <p className="text-light">{value.fkCliente.sexo}</p>
                                    </Col>
                                </Col>
                                <Col className="details">
                                    <Col className="c-align">
                                        <h3 className="text-light">Cedula:</h3>
                                        <p className="text-light">{value.cedula}</p>
                                    </Col>
                                    <Col className="c-align">
                                        <h3 className="text-light">Numero de tarjeta:</h3>
                                        <p className="text-light">{value.numTarjetaCredito}</p>
                                    </Col>
                                </Col>
                            </Row>
                            <Row>

                                <Col className="details">
                                    <Col className="c-align">
                                        <h3 className="text-light">Número de teléfono:</h3>
                                        <p className="text-light">{value.fkCliente.telefono}</p>
                                    </Col>
                                    <Col className="c-align">
                                        <h3 className="text-light">Correo electrónico:</h3>
                                        <p className="text-light">{value.fkCliente.correo}</p>
                                    </Col>
                                </Col>
                            </Row>
                            </Col>
                })}
            </Row>
            <Row className="justify-content-center">
                <Button onClick={() => navigate("/menu")} className="fixed-bottom footer"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
            </Row>
        </Container>
    )
}

export default Profile
