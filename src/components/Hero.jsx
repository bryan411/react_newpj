import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'>THE<span className='text-orange-500'> BEST</span></h1>
                <h2 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:7xl font-bold'><span className='text-orange-500'>YGO</span> DELIVERED</h2>
            </div>
            <img  className=' w-full max-h-[500px] object-cover' src="https://www.yugioh-card.com/japan/event/irevent/images/main.jpg" alt="/" />
        </div>
    </div>
  )
}

export default Hero