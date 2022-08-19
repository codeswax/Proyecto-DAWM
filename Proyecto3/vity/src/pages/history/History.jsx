import React from 'react'
import './history.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const History = () => {
    const [listOfTrips, setListOfTrips] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3000/trips").then((response) => {
            setListOfTrips(response.data)
        })
    }, [])
    let navigate = useNavigate()
    return (
        <Container>
            <Row>
                <Col className="header text-center">
                    <h1 className="text-light"><strong>Historial</strong></h1>
                    <h2 className="text-light">Repasa tu historial de viajes.</h2>
                </Col>
            </Row>
            <Row className="t-align">
                <Col className="selection">
                    <Row className="justify-content-center">
                        {listOfTrips.map((value, key) => {
                            return <Button onClick={() => navigate(`historydetails/${value.idCarrera}`, value.idCarrera)} className="choice">
                                <Row className="justify-content-center">
                                    <Col xs className="t-align">
                                        <h2 className="text-light"># {value.idCarrera}</h2>
                                    </Col>
                                    <Col xs lg="10" className="c-align">
                                        <h3 className="text-light">{value.fecha}</h3>
                                        <h4 className="text-light">Vity {value.tipo}</h4>
                                    </Col>

                                </Row>
                            </Button>
                        })}
                    </Row>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Button onClick={() => navigate("/menu")} className="fixed-bottom footer"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
            </Row>
        </Container>
    )
}

export default History
