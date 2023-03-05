import { Calendar } from 'iconsax-react'
import Image from 'next/image'
import React from 'react'

const BlogCard = ({ blog }: any) => {
    const date = blog?.date.toUTCString().split(" ")[0] + " " + blog?.date.toUTCString().split(" ")[1] + " " + blog?.date.toUTCString().split(" ")[2] + " " + blog?.date.toUTCString().split(" ")[3]
  return (
    <div className='flex-1 flex flex-col gap-y-8'>
        <h1>{blog?.title}</h1>
        
        <div className='w-full bg-light-plus mt-16 h-[400px] relative'>
            <div className='flex flex-col gap-y-8 p-8'>
                <div className="flex gap-x-6">
                    <Calendar size="26" color="#14141575"/>
                    <p>{date}</p>
                </div>
                <p>
                    {blog?.content}
                </p>
            </div>
            <div className='absolute -top-16 right-8 w-72 h-72'>
                <Image src='/images/blogs/temp.jpg' alt='author' unoptimized width={100} height={100} className='w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}

export default BlogCard