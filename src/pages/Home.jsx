import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeSecondaryText from '../components/home/HomeSecondaryText'

const Home = () => {
    return (
        <div>
            <div className=' fixed'>
                <Video />
            </div>

            <div className=' text-white  relative flex flex-col justify-between'>
                <HomeHeroText />
                <HomeSecondaryText />
                <br />
                <HomeBottomText />
            </div>
        </div>
    )
}

export default Home
