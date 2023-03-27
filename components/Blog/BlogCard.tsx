import { Calendar } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blog }: any) => {
    const date = blog?.date.toUTCString().split(" ")[0] + " " + blog?.date.toUTCString().split(" ")[1] + " " + blog?.date.toUTCString().split(" ")[2] + " " + blog?.date.toUTCString().split(" ")[3]
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
        <h1>{blog?.title}</h1>
        
        <div className='w-full bg-light-plus mt-16 min-h-[400px] relative'>
            <div className='flex flex-col gap-y-8 p-8'>
                <div className="flex gap-x-6">
                    <Calendar size="26" color="#14141575"/>
                    <p>{date}</p>
                </div>
                <div className='flex gap-x-4 items-center'>
                    {
                        blog?.tags.map((tag: string, index: number) => (
                            <div key={index} className='bg-light px-4 py-2'>
                                <p className='text-sm text-black px-4 py-1 rounded-full'>{tag}</p>
                            </div>
                        ))
                    }
                </div>
                <div className='w-3/4' dangerouslySetInnerHTML={{ 
                    __html: blog?.content
                }}>
                </div>
            </div>
            <div className='absolute -top-16 right-8 w-32 h-32 md:w-72 md:h-72'>
                <Image src='/images/blogs/temp.jpg' alt='author' unoptimized width={100} height={100} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default BlogCard