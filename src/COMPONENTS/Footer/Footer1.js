import React from 'react'
import veges from '../../ASSETS/veges.png'
import './Footer1.css'

const Footer1 = () => {
    return (
        <div className='footer'>
            <div className='left'>
                <img src={veges} alt='veges' />
            </div>
            <div className='right'>
                <h1>Vegetables, Fruits and other items at your doorstep</h1>
                <p>We deliver every household item including fruits and vegetables.</p>
            </div>
        </div>
    )
}

export default Footer1