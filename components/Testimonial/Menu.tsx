import React from 'react'

const Menu = ({ index, setIndex }: {
    index: number
    setIndex: React.Dispatch<React.SetStateAction<number>>
}) => {
  return (
    <div className='hidden md:flex flex-col w-1/3 h-[300px] border-l border-l-black justify-center items-start px-8 gap-y-8'>
        <div 
            className={`flex gap-x-2 items-center cursor-pointer ${index !== 0 && 'opacity-40'}`}
            onClick={() => setIndex(0)}
        >
            <div className='w-2 h-2 rounded-full bg-black'/>
            <h2>Sunway International College</h2>
        </div>
        <div 
            className={`flex gap-x-2 items-center cursor-pointer ${index !== 1 && 'opacity-40'}`}
            onClick={() => setIndex(1)}
        >
            <div className='w-2 h-2 rounded-full bg-black'/>
            <h2>Insight A Podcast</h2>
        </div>
        <div 
            className={`flex gap-x-2 items-center cursor-pointer ${index !== 2 && 'opacity-40'}`}
            onClick={() => setIndex(2)}
        >
            <div className='w-2 h-2 rounded-full bg-black'/>
            <h2>Wisdom Point</h2>
        </div>
    </div>        
  )
}

export default Menu