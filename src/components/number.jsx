import React from 'react'
import PropTypes from 'prop-types'

const Number = ({ number, childClicked }) => {
    return (
        <>
            <button onClick={() => childClicked(number)} >{number}</button>

        </>
    )
}

Number.propTypes = {
    Number: PropTypes.string
}

export default Number
