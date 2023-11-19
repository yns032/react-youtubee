import React, { useEffect } from 'react'
import HomeCart from '../components/HomeCart'
import Filter from '../components/Filter'
import { useDispatch, useSelector } from 'react-redux'

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
                <HomeCart />
                <HomeCart />
                <HomeCart />
                <HomeCart />
                <HomeCart />
                <HomeCart />
                <HomeCart />
                <HomeCart />
            </div>

        </div>
    )
}

export default Home
