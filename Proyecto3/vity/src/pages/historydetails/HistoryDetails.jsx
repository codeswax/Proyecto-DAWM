import React from 'react'
import './historydetails.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const HistoryDetails = () => {
    const id = (window.location.pathname).slice(-1)
    const [listOfDetails, setListOfDetails] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/tripsdetails/trip/${id}`).then((response) => {
            setListOfDetails(response.data)
        })
    }, [])
    let navigate = useNavigate()    
    return (
        <Container>
            <Row className="justify-content-center">
                <Col className="header">
                    <h1 className="text-center text-light"><strong>Datos</strong></h1>
                    <h2 className="text-center text-light">del viaje</h2>
                </Col>
            </Row>
            {listOfDetails.map((value, key) => {
                return (
                    <Col className="personal-stuff">
                        <Row className="justify-content-center">
                            <Row className="text-center">
                                <Col className="c-align">
                                    <h2 className="text-light">Partida</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="details">
                                    <h3 className="text-light">Ruta:</h3>
                                    <p className="text-light">{value.carrTrans.rutaCarrera.puntoInicio}</p>
                                    <h3 className="text-light">Hora:</h3>
                                    <p className="text-light">{value.carrTrans.horaCarrera.horaInicio}</p>
                                </Col>
                            </Row>
                            <Row className="text-center">
                                <Col className="c-align">
                                    <h2 className="text-light">Llegada</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="details">
                                    <h3 className="text-light">Ruta:</h3>
                                    <p className="text-light">{value.carrTrans.rutaCarrera.puntoLlegada}</p>
                                    <h3 className="text-light">Hora:</h3>
                                    <p className="text-light">{value.carrTrans.horaCarrera.horaLlegada}</p>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Row className="text-center">
                                    <Col className="c-align">
                                        <h2 className="text-light">Pago</h2>
                                    </Col>
                                    <Col className="c-align">
                                        <h2 className="text-light">Socios</h2>
                                    </Col>
                                </Row>
                                <Col className="stats">
                                    <h3 className="text-light">Precio:</h3>
                                    <p className="text-light">${value.monto}</p>
                                    <h3 className="text-light">Método de Pago:</h3>
                                    <p className="text-light">{value.tipo}</p>
                                </Col>
                                <Col className="stats">
                                    <h3 className="text-left text-light">Conductor:</h3>
                                    <p className="text-left text-light">{value.carrTrans.conductorCarrera.datosConductor.nombre} {value.carrTrans.conductorCarrera.datosConductor.apellido}</p>
                                    <h3 className="text-left text-light">Operador:</h3>
                                    <p className="text-left text-light">{value.carrTrans.operadorCarrera.datosOperador.nombre} {value.carrTrans.operadorCarrera.datosOperador.apellido}</p>
                                </Col>
                            </Row>
                        </Row>
                    </Col>
                )
            })}
            <Row className="r-align justify-content-center">
                    <Button onClick={() => navigate("/history")} className="fixed-bottom footer"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
            </Row>
        </Container>
    )
}

export default HistoryDetails
