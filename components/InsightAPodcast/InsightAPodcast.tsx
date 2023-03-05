import Image from 'next/image'
import React from 'react'

import { insightEps } from '@/components/InsightAPodcast/insightData'

const InsightAPodcast = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex-1'>
            <h1>INSIGHT A PODCAST</h1>
            <p>About insight a podcast.....</p>
        </div>
        <div className='flex-1 flex flex-col max-h-[800px] overflow-auto hide-scrollbar'>
            {
                insightEps.map((each, index) => (
                    <div className='w-full flex flex-row even:flex-row-reverse justify-center' key={index}>
                        <div className='w-64 h-48 border border-fade flex items-end justify-between p-4'>
                            <h3 className='uppercase'>Ep</h3>
                            <h1>{each.ep}</h1>
                        </div>
                        <div className='w-64 h-48 flex items-end justify-between'>
                            <Image src={each.thumbnail} alt={each.ep.toString()} width={250} height={190} className='w-full h-full object-cover'/>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default InsightAPodcast