import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
    return (
        <div className="pb-3 font-[font2] flex item-center justify-center gap-5">
            <Link className="text-[88px] hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[6vw] border-3 border-white rounded-full px-7 pt-2 uppercase" to="/projects">Projects</Link>
            <Link className="text-[88px] hover:border-[#D3FD50] hover:text-[#D3FD50] leading-[6vw] border-3 border-white rounded-full px-7 pt-2 uppercase" to="/agence">Agency</Link>
        </div>
    )
}

export default HomeBottomText
