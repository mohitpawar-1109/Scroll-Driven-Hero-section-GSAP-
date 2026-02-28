import React, { forwardRef } from 'react'


const Card = forwardRef(({ percent, color, para, position, right, id }, ref) => {
    return (
        <div
            id={id}
            ref={ref}
            className={`
                w-fit py-8 px-12
                flex flex-col items-center gap-1.5
                ${color}
                absolute
                ${position}
                ${right}
                -translate-x-1/2
                rounded-lg shadow-lg
            `}
        >
            <h3 className='font-bold text-6xl text-start'>{percent}</h3>
            <p className='font-medium text-sm'>{para}</p>
        </div>
    )
})

Card.displayName = 'Card'

export default Card