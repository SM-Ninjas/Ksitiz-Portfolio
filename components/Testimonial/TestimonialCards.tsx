import Image from 'next/image'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { testimonialData } from './testimonialData'

const TestimonialCards = ({ index}: {
    index: number
}) => {
  return (
    <ScrollContainer className='flex-1 flex gap-x-4'>
        {
            index === 0 ? (
                testimonialData.insight.map((item, index) => (
                    <Card 
                        key={index} 
                        values = {item}
                    />
                ))
            )
            :
            index === 1 ? (
                testimonialData.sunway.map((item, index) => (
                    <Card
                        key={index}
                        values = {item}
                    />
                ))
            )
            :
            testimonialData.wisdom.map((item, index) => (
                <Card
                    key={index}
                    values = {item}
                />
            ))
        }
    </ScrollContainer>
  )
}

const Card = ({ values }: {
    values?: {
        name: string
        image: string
        position: string
        content: string
    }
}) => {
    return (
        <div className='flex flex-col gap-y-8 p-8 bg-light-plus h-[300px] w-full md:w-1/2 flex-shrink-0'>
            <div className='flex gap-x-8 items-center'>
                <Image src={values?.image!} alt={`${values?.name!}'s testimonial on Ksitiz Devkota`} unoptimized width={100} height={100} className='w-12 h-12 object-cover rounded-full'/>
                <h2>{values?.name!}</h2>
            </div>
            <p>{values?.content!}</p>
        </div>
    )
}

export default TestimonialCards