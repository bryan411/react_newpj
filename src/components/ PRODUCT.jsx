import React, { useState } from 'react'
import {data} from '../DATA/data'



 const  PRODUCT = () => {

    const [cards,setCards]=useState(data);
    // FILTER 
    const filtertype = (category)=>{
        setCards(
            data.filter((item)=>{
                return item.category === category
            })
        )
    }



  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'> 
        <h1 className='border bg-black text-orange-500  font-bold text-4xl text-center'>お買い得商品</h1>

        <div className='flex flex-col lg:flex-row  justify-between '> 
            <div>
                <p className='font-bold text-gray-700'>商品の種類</p>
                    <div className='flex justify-between flex-wrap' >
                        <button onClick={()=> filtertype('効果')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>効果</button>
                        <button onClick={()=> filtertype('魔法')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>魔法</button>
                        <button onClick={()=> filtertype('罠')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>罠</button>
                    </div>
            </div>

           
        </div>
        
            
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-20 pt-1'>
            {cards.map((item, id)=>(
                <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name} className='w-full h-full ' />
                    <div className='border border-gray-400 flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{item.price}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
};
export default PRODUCT;