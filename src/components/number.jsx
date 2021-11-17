import React from 'react'
import PropTypes from 'prop-types'
import './styles/styleNumber.css'

const Number = ({ number, childClicked }) => {
    return (
        <>
            <button className={number === "0" ? "cero" : "numberN"} onClick={() => childClicked(number)} >{number}</button>

        </>
    )
}

Number.propTypes = {
    Number: PropTypes.string
}

export default Number
