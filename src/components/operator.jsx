import React from 'react'
import PropTypes from 'prop-types'

const Operator = ({ operator, operatorClicked }) => {

    const op = operator


    return (
        <>
            <button className={operator === "AC" ? "AC" : "OperatorN"} onClick={() => operatorClicked(op)} >{operator}</button>
        </>
    )
}

Operator.propTypes = {
    operator: PropTypes.string
}

export default Operator
