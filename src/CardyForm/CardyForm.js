import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import CardyModel from './CardyModel'


class CardyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: '',
            owner: '',
            expirationMonth: '',
            expirationYear: '',
            cvv: '',
            type: '',
        }
    }

    handleCardType = cardNumber => {
        const masterCardRegExp = /^(?:5[1-5]|222[1-9]|22[3-9]|2[3-6][0-9]|27[0-1]|2720)/
        const visaRegExp = /^4[0-9]/
        const americanExpressRegExp = /^3[47]/

        if (americanExpressRegExp.test(cardNumber)) {
            this.setState({ type: 'AmericanExpress' })
        }
        else if (visaRegExp.test(cardNumber)) {
            this.setState({ type: 'Visa' })
        }
        else if (masterCardRegExp.test(cardNumber)) {
            this.setState({ type: 'MasterCard' })
        }
        else {
            this.setState({ type: 'Default' })
        }

    }

    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({ [name]: value })
        name === "number" && this.handleCardType(value)
    }

    handleSubmit = event => {
        event.preventDefault()
        // Add here your own service
        // Example: 
        /*
        this.eCommerceService.payment(this.state)
            .then(() => this.props.finishCheckout())
            .catch(error => console.log(error))
        */
    }



    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs="12" md="6">
                        <Form>
                            <Form.Group controlId="formCardNumber">
                                <Form.Label>Card Number</Form.Label>
                                <Form.Control type="text" placeholder="Card Number" name="number" value={this.state.number} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="formCardOwner">
                                <Form.Label>Cardholder's Name</Form.Label>
                                <Form.Control type="text" placeholder="Your Name" name="owner" value={this.state.owner} onChange={this.handleInputChange} />
                            </Form.Group>

                            <Row>
                                <Col>
                                    <Form.Group controlId="formCardExpiration">
                                        <Form.Label>Expires</Form.Label>
                                        <Row>
                                            <Col>
                                                <Form.Control type="text" placeholder="MM" name="expirationMonth" value={this.state.expiration} onChange={this.handleInputChange} />

                                            </Col>
                                            <Col>
                                                <Form.Control type="text" placeholder="YY" name="expirationYear" value={this.state.expiration} onChange={this.handleInputChange} />

                                            </Col>
                                        </Row>
                                    </Form.Group>
                                </Col>

                                <Col>
                                    <Form.Group controlId="formCardCVV">
                                        <Form.Label>CVV</Form.Label>
                                        <Form.Control type="text" name="cvv" value={this.state.cvv} onChange={this.handleInputChange} />
                                    </Form.Group>
                                </Col>
                            </Row>

                            <CardyModel
                                number={this.state.number}
                                owner={this.state.owner}
                                expirationMonth={this.state.expirationMonth}
                                expirationYear={this.state.expirationYear}
                                cvv={this.state.cvv}
                                type={this.state.type}
                            />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default CardyForm