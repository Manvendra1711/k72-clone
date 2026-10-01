import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className="font-[font1] pt-5 text-center">
            <div className='text-[128px] justify-center flex items-center uppercase leading-[8.5vw]'>
                The spark for
            </div>
            <div className='text-[128px] justify-center flex items-start uppercase leading-[8.5vw]'>
                all
                <div className="h-[8vw] w-[16vw] rounded-full -mt-1 overflow-hidden">
                    <Video />
                </div>
                things
            </div>
            <div className='text-[128px] justify-center flex items-center uppercase leading-[8.5vw]'>
                creative </div>
        </div>
    )
}

export default HomeHeroText
