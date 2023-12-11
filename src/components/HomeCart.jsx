import React from 'react'
import image from '../asset/images/Adsız.png'
import moment from 'moment'
const HomeCart = ({ video }) => {
    return (
        <div onClick={() => window.location = `video/${video?.id}`} className='w-[250px] m-3'>
            <img src={video?.snippet?.thumbnails?.high?.url} />
            <div className='font-bold mt-2'>{(video?.snippet?.title).substring(0, 50)}...</div>
            <div className='text-xs mt-1 text-gray-700'>{video?.snippet?.channelTitle}</div>
            <div className='text-xs mt-1 text-gray-700'>
                <span className='text-sm'>1.2M görüntüleme</span>
                <span className='text-sm'> {moment(video.snippet.publishedAt).startOf('day').fromNow()}</span>
            </div>
        </div>
    )
}

export default HomeCart
