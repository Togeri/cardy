import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Default.css'
import Chip from '../../../img/credit-card-chip.svg'


const Default = (props) => {


    return (
        <Container className='card-container default'>
            <Row>
                <Col xs={{ span: 3, offset: 9 }}>
                    Insert Logo Here
                </Col>
                <Col xs={{ span: 3 }}>
                    <img src={Chip} alt='Chip Logo' className='chip-logo' />
                </Col>
            </Row>
            <Row>
                {props.number
                    ?
                    <>
                        <Col xs={{offset: 1}}>{props.number.slice(0, 4)}</Col>
                        <Col>{props.number.slice(4, 8)}</Col>
                        <Col>{props.number.slice(8, 12)}</Col>
                        <Col>{props.number.slice(12, 16)}</Col>
                    </>
                    :
                    <>
                        <Col xs={{ offset: 1 }}>••••</Col>
                        <Col>••••</Col>
                        <Col>••••</Col>
                        <Col>••••</Col>
                    </>
                }
            </Row>
            <Row>
                <Col xs={{ span: 9 }}>
                    {props.owner ? props.owner.toUpperCase() : "FULL NAME"}
                </Col>
                <Col>{props.expirationMonth ? props.expirationMonth : "••"} / {props.expirationYear ? props.expirationYear : "••"}</Col>
            </Row>

        </Container>
    )

}

export default Default