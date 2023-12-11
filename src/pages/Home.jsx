import React, { useEffect } from 'react'
import HomeCart from '../components/HomeCart'
import Filter from '../components/Filter'
import { useDispatch, useSelector } from 'react-redux'
import homeAction from '../redux/actions/HomeData'

const Home = () => {
    const dispatch = useDispatch()
    const { getVideos } = useSelector(state => state.getVideos)

    useEffect(() => {
        dispatch(homeAction('Tümü'))
    }, [dispatch])

    console.log("getVideos", getVideos)
    return (
        <div className='m-3'>
            <Filter />
            <div className='flex flex-wrap m-2 '>

                {getVideos && getVideos.items && getVideos.items.map((video, i) => (
                    <HomeCart key={i} video={video} />
                ))

                }

            </div>

        </div>
    )
}

export default Home
