import Image from 'next/image'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { projects } from './projects'

import { AnimatePresence, motion } from "framer-motion";

const OngoingProjects = () => {
  return (
    <AnimatePresence>
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
                        <motion.div className='w-full md:w-1/2 h-[600px] object-cover flex-shrink-0' key={index}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            exit={{ opacity: 0, y: 100 }}
                        >
                            {
                                each.thumbnail === '' ? (
                                    <div className='w-full h-full bg-fade flex justify-center items-center'>
                                        <h1 className='uppercase opacity-40 -rotate-12'>{each.title}</h1>
                                    </div>
                                ) : (
                                    <Image priority unoptimized src={each.thumbnail} alt={each.title} width={250} height={190} className='w-full h-full object-cover object-top' />
                                )
                            }
                        </motion.div>
                    ))
                }
            </ScrollContainer>
        </div>
    </AnimatePresence>
  )
}

export default OngoingProjects