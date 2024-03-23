import React from 'react'
import logo from '../assets/investment-calculator-logo.png'

function Header() {
    return (
        <div id='header'>
            <img src={logo} alt='Image of bag full of money' />
            <h1>Investment Calculator Web App</h1>
        </div>
    )
}

export default Header