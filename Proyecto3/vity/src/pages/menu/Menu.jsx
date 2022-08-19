import React from 'react'
import './menu.css'
import { useNavigate } from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from 'react'
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Menu = () => {
  const [profileStuff, setProfileStuff] = useState([])
  useEffect(() => {
      axios.get("http://localhost:3000/profile").then((response) => {
          setProfileStuff(response.data)
      })
  }, [])
  let navigate = useNavigate()
  return (
    <Container >
      <Row className="justify-content-center">
        <Col className="header text-center">
          {profileStuff.map((value, key) => {
            return <h1 className="text-light"><strong>Hola, {value.fkCliente.nombre}</strong></h1>
          })}
          <h2 className="text-light">¿Qué deseas hacer hoy?</h2>
        </Col>
      </Row>
      <Row className="r-align justify-content-center">
        <Button onClick={() => navigate("/travel")} className="option"><img src="/icons/travel.svg" className="img-fluid" alt="travel" /><h3 className="text-center text-light">Agendar un viaje</h3></Button>
      </Row>
      <Row className="r-align justify-content-center">
        <Button onClick={() => navigate("/history")} className="option"><img src="/icons/history.svg" className="img-fluid" alt="history" /><h3 className="text-center text-light">Ver viajes pasados</h3></Button>
      </Row>
      <Row className="r-align justify-content-center">
        <Button onClick={() => navigate("/profile")} className="option"><img src="/icons/user.svg" className="img-fluid" alt="user" /><h3 className="text-center text-light">Visitar mi perfil</h3></Button>
      </Row>
      <Row className="justify-content-center">
        <Col className="text-center">
          <Button onClick={() => navigate("/")} className="fixed-bottom footer"><img src="/icons/back.svg" className="img-fluid" alt="back" /></Button>
        </Col>
      </Row>
    </Container>
  )
}

export default Menu
