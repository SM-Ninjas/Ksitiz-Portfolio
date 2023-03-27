import Image from 'next/image'
import React from 'react'

import { insightEps } from '@/components/InsightAPodcast/insightData'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const InsightAPodcast = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['insightEps'],
        queryFn: () => axios.get('https://server.insightapodcast.com/api/podcasts').then((res: any) => {
            return res.data
        }),
    })

    return (
        <div className='flex md:justify-between flex-col md:flex-row gap-y-4'>
            <div className='flex-1'>
                <h1>INSIGHT A PODCAST</h1>
                <p>
                    ‘Insight A Podcast’ is a passionate initiation to capture the stories, cover the professional viewpoint, and in turn drive the aspiring future marketers towards their objective.
                    Podcast is a new information hub. Everyone can tune into their favorite podcast at any time. Many podcasts have been surfacing lately with great content and we too have decided to make our own space among them becoming the first Nepali podcast to focus on the marketing domain.
                </p>
            </div>
            <div className='flex-1 flex flex-col max-h-[800px] overflow-auto hide-scrollbar'>
                {
                    isLoading || data === undefined ? (
                        [...Array(4)].map((_, index) => (
                            <div className='w-full flex flex-row even:flex-row-reverse justify-center' key={index}>
                                <div className='w-64 h-48 border border-fade flex items-end justify-between p-4'>
                                    <h3 className='uppercase'>Ep</h3>
                                    <h1>...</h1>
                                </div>
                                <div className='w-64 h-48 flex items-end justify-between bg-slate-400 animate-pulse'>

                                </div>
                            </div>
                        ))
                    ) : (
                        data.map((each: any, index: number) => (
                            <div className='w-full flex flex-row even:flex-row-reverse justify-center' key={index}>
                                <div className='w-64 h-48 border border-fade flex items-end justify-between p-4'>
                                    <h3 className='uppercase'>Ep</h3>
                                    <h1>{each.episode}</h1>
                                </div>
                                <div className='w-64 h-48 flex items-end justify-between'>
                                    <Image src={each.coverImage} unoptimized alt={each.episode.toString()} width={250} height={190} className='w-full h-full object-cover'/>
                                </div>
                            </div>
                        ))
                    )
                }
            </div>
        </div>
    )
}

export default InsightAPodcast