import React from 'react'
import Slider from 'react-slick'
import './BannerSlider.css'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Fresh vegetables and fruits at your doorstep',
            description: 'We deliver fresh vegetables and fruits at your doorstep',
            button: 'https://www.google.com'
        },
        {
            id: 2,
            image: 'https://images.pexels.com/photos/162804/cherries-fruits-sweet-cherry-cherry-harvest-162804.jpeg?auto=compress&cs=tinysrgb&w=600',
            title: 'Fresh Vegetables and fruits at your doorstep',
            description: "Cherries and berries. Sweet peaches and nectarines. Summer baking season is here, and I couldn't be more delighted",
            button: 'https://www.google.com' 
        }
    ]

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

  return (
    <div className='bannerslider' {...settings}>
      <Slider>
        {
            data.map(item =>{
                return(
                    <div className='imagecont' key={item.id}>
                        <img src={item.image} alt='noimg' />
                        <div className='content'>
                            <h1>{item.title}</h1>
                            <span>{item.description}</span>
                            <button>Shop More</button>
                        </div>
                    </div>
                )
            })
        }
        
      </Slider>
    </div>
  )
}

export default BannerSlider
