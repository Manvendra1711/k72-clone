import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import HomeSecondaryText from '../components/home/HomeSecondaryText'

const Home = () => {
    return (
        <div>
            <div className='h-screen w-screen fixed'>
                <Video />
            </div>

            <div className='text-white h-screen w-screen relative flex flex-col justify-between'>
                <HomeHeroText />
                <HomeSecondaryText />
                <br />
                <HomeBottomText />
                
            </div>
        </div>
    )
}

export default Home
