import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import BlogCard from './BlogCard'
import { blogs } from './blogsData'

const Blogs = () => {
  return (
    <ScrollContainer className='w-full flex gap-x-4'>
        {
            blogs.map((each, index) => (
                <BlogCard key={index} blog={each} />
            ))
        }
    </ScrollContainer>
  )
}

export default Blogs