import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Visa.css'
import Logo from '../../../img/CompanyLogos/VisaLogo.png'
import Chip from '../../../img/credit-card-chip.svg'



const Visa = (props) => {

    return (
        <Container className='card-container visa'>
            <Row>
                <Col xs={{ span: 3, offset: 9 }}>
                    <img src={Logo} alt='Visa Logo' className='logo' />
                </Col>
                <Col xs={{ span: 3, offset: 1 }}>
                    <img src={Chip} alt='Chip Logo' className='chip-logo' />
                </Col>
            </Row>
            <Row className='card-number'>
                <Col xs={{ offset: 1 }}>{props.number.slice(0, 4)}</Col>
                <Col>{props.number.slice(4, 8)}</Col>
                <Col>{props.number.slice(8, 12)}</Col>
                <Col>{props.number.slice(12, 16)}</Col>
            </Row>
            <Row>
                <Col xs={{ span: 8, offset: 1 }} className='card-owner'>
                    {props.owner ? props.owner.toUpperCase() : "FULL NAME"}
                </Col>
                <Col className='expiration-date'>
                    {props.expirationMonth ? props.expirationMonth : "••"} / {props.expirationYear ? props.expirationYear : "••"}
                </Col>
            </Row>
        </Container>
    )

}

export default Visa