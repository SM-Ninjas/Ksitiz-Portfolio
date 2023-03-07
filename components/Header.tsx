import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div className='w-full flex justify-center py-4'>
      <Image src={'/images/logo/dark.png'} alt='logo' width={200} height={200} className='w-10 h-auto' />
    </div>
  )
}

export default Header