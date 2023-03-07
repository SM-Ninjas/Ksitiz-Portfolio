import React from 'react'
import Menu from './Menu'
import TestimonialCards from './TestimonialCards'

const Testimonial = () => {
    const [index, setIndex] = React.useState(0)

    return (
        <div className='space-y-4 mb-8'>
            <h1>TESTIMONIALS</h1>
            <div className='flex flex-row gap-x-12 h-max'>
                <Menu
                    index={index}
                    setIndex={setIndex}
                />
                <TestimonialCards 
                    index={index}
                />
            </div>
        </div>
    )
}

export default Testimonial