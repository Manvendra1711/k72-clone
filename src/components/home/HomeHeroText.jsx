import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className="font-[font1] pt-5 text-center">
            <div className='text-[128px] justify-center flex items-center uppercase leading-[8.5vw]'>
                L'étincelle
            </div>
            <div className='text-[128px] justify-center flex items-start uppercase leading-[8.5vw]'>
                qui
                <div className="h-[8vw] w-[16vw] rounded-full -mt-1 overflow-hidden">
                    <Video />
                </div>
                génère
            </div>
            <div className='text-[128px] justify-center flex items-center uppercase leading-[8.5vw]'>
                la créativité</div>
        </div>
    )
}

export default HomeHeroText
