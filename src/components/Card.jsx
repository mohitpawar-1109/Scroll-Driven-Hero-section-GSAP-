import React from 'react'

const Card = ({ percent, color, para, top, right, id }) => {
    return (<div>
        <div id={id} className={`w-fit py-8 px-12 flex flex-col items-center  gap-1.5 ${color} absolute ${top === "20" ? "top-20" : "bottom-20"} ${right} -translate-x-1/2 rounded-lg shadow-lg`}>
            <h3 className='font-bold text-6xl text-start'>{percent}</h3>
            <p className='font-medium text-sm'>{para}</p>
        </div>

    </div>

    )
}

export default Card