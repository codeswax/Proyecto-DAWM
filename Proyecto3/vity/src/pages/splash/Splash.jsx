import React from 'react'
import './splash.css'
import { useNavigate } from "react-router-dom"
//bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
const Splash = () => {
	let navigate = useNavigate()

	const changePage = () => {
		let page = `menu`
		navigate(page)
	}

	return (
		<Container className="full">
			<Row className="align justify-content-center">
				<Col xs="auto">
					<img src="/logo/logo.svg" className="img-fluid" alt="logo" />
				</Col>
			</Row>
			<Row className="justify-content-center">
				<Col xs="auto">
					<h1 className="description text-center text-light">viajes <strong>inigualables</strong> <b /> a precios <strong>increíbles.</strong></h1>
				</Col>
			</Row>
			<Row className="align justify-content-center">
				<Col xs="auto">
					<Button onClick={changePage} className="next"><img src="/icons/next.svg" className="img-fluid" alt="next" /></Button>
				</Col>
			</Row>
		</Container>
	)
}

export default Splash
