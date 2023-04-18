import React from 'react'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import Footer1 from '../../COMPONENTS/Footer/Footer1'
import Footer2 from '../../COMPONENTS/Footer/Footer2'
import SingleBanner from '../../COMPONENTS/Banners/SingleBanner'

const Cart = () => {
    return (
        <div>
            <Navbar />
            <SingleBanner
                heading="My Cart"
                bannerimage='https://images.unsplash.com/photo-1518843875459-f738682238a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dmVnZXRhYmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
            />
            Cart
            <Footer1/>
            <Footer2/>
        </div>
    )
}

export default Cart