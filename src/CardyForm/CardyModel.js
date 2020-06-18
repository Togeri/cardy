import React from 'react'
import Default from './Models/Default/Default'
import MasterCard from './Models/MasterCard/MasterCard'
import Visa from './Models/Visa/Visa'
import AmericanExpress from './Models/AmericanExpress/AmericanExpress'

const CardyModel = (props) => {

    const renderCardyModel = () => {
        switch (props.type) {
            case 'MasterCard':
                return <MasterCard
                    number={props.number}
                    owner={props.owner}
                    expirationMonth={props.expirationMonth}
                    expirationYear={props.expirationYear}
                    cvv={props.cvv}
                />

            case 'Visa':
                return <Visa
                    number={props.number}
                    owner={props.owner}
                    expirationMonth={props.expirationMonth}
                    expirationYear={props.expirationYear}
                    cvv={props.cvv}
                />

            case 'AmericanExpress':
                return <AmericanExpress
                    number={props.number}
                    owner={props.owner}
                    expirationMonth={props.expirationMonth}
                    expirationYear={props.expirationYear}
                    cvv={props.cvv}
                />

            default:
                return <Default
                    number={props.number}
                    owner={props.owner}
                    expirationMonth={props.expirationMonth}
                    expirationYear={props.expirationYear}
                    cvv={props.cvv}
                />
        }
    }

    return (
        <>
            {renderCardyModel()}
        </>
    )

}

export default CardyModel