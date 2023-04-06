import React from 'react'
import img1 from '../../ASSETS/Images/1.png'
import img2 from '../../ASSETS/Images/2.png'
import img3 from '../../ASSETS/Images/3.png'
import img4 from '../../ASSETS/Images/4.png'
import './CategorySidebar.css'

const CategorySidebar = () => {
    const data = [
        {
            id: 1,
            img: img1,
            title: 'Category 1'
        },
        {
            id: 2,
            img: img2,
            title: 'Category 2'
        },
        {
            id: 3,
            img: img3,
            title: 'Category 3'
        },
        {
            id: 4,
            img: img4,
            title: 'Category 4'
        },
        {
            id: 5,
            img: img1,
            title: 'Category 5'
        },
        {
            id: 6,
            img: img2,
            title: 'Category 6'
        },
        {
            id: 7,
            img: img3,
            title: 'Category 7'
        },
        {
            id: 8,
            img: img4,
            title: 'Category 8'
        }
    ]     
    return (
        <div className='categorysidebar'>
            {
                data.map((item) => {
                    return(
                        <div className='category'>
                            <img src={item.img} alt='categoryimage' />
                            <h3>{item.title}</h3>
                        </div>
                    )
                })
            }   
        </div>
    )
}

export default CategorySidebar