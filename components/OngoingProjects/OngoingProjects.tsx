import Image from 'next/image'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { projects } from './projects'

const OngoingProjects = () => {
  return (
    <div className='flex flex-col gap-y-12'>
        <div className='flex md:justify-between md:items-center flex-col md:flex-row gap-y-2'>
            <div className='w-full md:w-1/3'>
                <h1>ONGOING PROJECTS</h1>
            </div>
            <div className='flex-1'> 
                <p>Something about the projects and reason for working on these projects in detail. Something about the projects and reason for working on these projects in detail.</p>
            </div>
        </div>

        <ScrollContainer className='w-full flex gap-x-4 overflow-auto'>
            {
                projects.map((each, index) => (
                    <div className='w-full md:w-1/2 h-[600px] object-cover flex-shrink-0' key={index}>
                        {
                            each.thumbnail === '' ? (
                                <div className='w-full h-full bg-fade flex justify-center items-center'>
                                    <h1 className='uppercase opacity-40 -rotate-12'>{each.title}</h1>
                                </div>
                            ) : (
                                <Image priority unoptimized src={each.thumbnail} alt={each.title} width={250} height={190} className='w-full h-full object-cover object-top' />
                            )
                        }
                    </div>
                ))
            }
        </ScrollContainer>
    </div>
  )
}

export default OngoingProjects