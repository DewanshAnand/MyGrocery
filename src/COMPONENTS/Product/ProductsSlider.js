import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';
// import AllProduct from './AllProduct';
import './ProductsSlider.css'

const ProductsSlider = ({ products, categoryname }) => {

    const responsive = {
        // desktop: {
        //     breakpoint: { max: 3000, min: 1024 },
        //     items: 3,
        //     slidesToSlide: 3 // optional, default to 1.
        // },
        // tablet: {
        //     breakpoint: { max: 1024, min: 464 },
        //     items: 2,
        //     slidesToSlide: 2 // optional, default to 1.
        // },
        // mobile: {
        //     breakpoint: { max: 464, min: 0 },
        //     items: 1,
        //     slidesToSlide: 1 // optional, default to 1.
        // }
        display6: {
            breakpoint: { max: 2000, min: 1700 },
            items: 6
        },
        display5: {
            breakpoint: { max: 1700, min: 1200 },
            items: 5
        },

        display4: {
            breakpoint: { max: 1200, min: 900 },
            items: 4
        },
        display3: {
            breakpoint: { max: 900, min: 600 },
            items: 3
        },
        display1: {
            breakpoint: { max: 600, min: 500 },
            items: 2
        },
        display0: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };

    return (
        <div className='productsliderout' >
            <h1>{categoryname}</h1>

            <Carousel responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={3000}
                swipeable={true}
                draggable={true}
            >
                {products.map((item, index) => {
                    return (
                        <ProductCard data={item} key={index} />
                    )
                })}
            </Carousel>
        </div >
    )
}

export default ProductsSlider