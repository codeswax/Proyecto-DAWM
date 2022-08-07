import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Brand = () => {
    return (
        <>
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
        </>
    )
}

export default Brand
