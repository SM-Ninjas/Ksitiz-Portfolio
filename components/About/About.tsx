import Image from 'next/image'
import React from 'react'

const About = () => {
    const hoverClass = "cursor-pointer relative after:absolute after:-bottom-2 after:right-0 after:w-full after:h-1 after:bg-black after:transition-all after:duration-300 after:ease-in-out after:transform after:scale-x-0 hover:after:scale-x-100"
  return (
    <div className='relative flex justify-center items-center h-[800px]'>
        <div className='w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full radial-gradient flex justify-center items-center border-2 border-b-black md:border-b-transparent md:border-r-black'>
            <div className='w-[200px] h-[200px] md:w-[400px] md:h-[400px] relative flex justify-center items-center'>
                <Image src='/images/avatar/temp.jpg' alt='Ksitiz Devkota' unoptimized width={100} height={100} className='w-[99%] h-[99%] object-cover rounded-full'/>
                <div className='absolute top-0 right-0 w-full h-full rounded-full overlay-gradient flex justify-center items-center' />
            </div>
        </div>
        <div className='absolute bottom-16 md:bottom-auto md:right-8 flex flex-col gap-y-8 items-center md:items-start'>
            <h2 className={`${hoverClass}`}>Insight A Podcast</h2>
            <h2 className={`${hoverClass}`}>The Wisdom Point</h2>
            <h2 className={`${hoverClass}`}>Devkota Maha Suppliers</h2>
        </div>

        <div className='absolute top-16 md:top-auto md:left-8 flex flex-col items-center md:items-start gap-y-4'>
            <div className='flex flex-col items-center md:items-start'>
                <h1 className='text-[36px] uppercase'>Ksitiz Devkota</h1>
                <h2>Initiator for startups</h2>
            </div>
            <div className='flex gap-x-2 items-center'>
                <div className='w-2 h-4 bg-black'/>
                <p>He gets it done</p>
            </div>
        </div>
    </div>
  )
}

export default About