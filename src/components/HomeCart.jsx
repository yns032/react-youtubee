import React from 'react'
import image from '../asset/images/Adsız.png'
const HomeCart = () => {
    return (
        <div className='w-[250px] m-3'>
            <img src={image} />
            <div className='font-bold mt-2'>Title Title Title Title Title Title Title Title Title</div>
            <div className='text-xs mt-1 text-gray-700'>Youtube Videoları</div>
            <div className='text-xs mt-1 text-gray-700'>
                <span className='text-sm'>1.2M görüntüleme</span>
                <span className='text-sm'> 1 gün önce</span>
            </div>
        </div>
    )
}

export default HomeCart
