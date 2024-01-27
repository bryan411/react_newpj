import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        <div className='ruonded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>クォーター・センチュリー・クロニクル サイド</p>
              <p className='px-2'>2024年1月20日</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>購入</button>
            </div>
        <img className='max-h-[160px] md:max-h-[400px] w-full object-cover roundede-xl' 
        src="https://www.yugioh-card.com/japan/event/images/tournament_pack_nc_m.png" alt="/" />
        </div>

        <div className='ruonded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>QUARTERクォーター CENTURYセンチュリー CHRONICLEクロニクル</p>
              <p className='px-2'>2024年3月23日</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>購入</button>
            </div>
        <img className='max-h-[160px] md:max-h-[400px] w-full object-cover roundede-xl'
         src="https://www.yugioh-card.com/japan/products/package/cg1947.png" alt="/" />
        </div>

        <div className='ruonded-xl relative'>
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
              <p className='font-bold text-2xl px-2 pt-4'>PREMIUMプレミアム PACKパック 2024</p>
              <p className='px-2'>2023年12月16日</p>
              <button className='border-white bg-white text-black mx-2 absolute bottom-4'>購入</button>
            </div>
        <img className='max-h-[160px] md:max-h-[400px] w-full object-cover roundede-xl' 
        src="https://www.yugioh-card.com/japan/products/package/cg1938-box.png" alt="/" />
        </div>
    </div>
  )
}

export default HeadlineCards