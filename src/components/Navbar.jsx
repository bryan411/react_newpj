import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineSearch, AiFillTag} from 'react-icons/ai'
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs'
import {TbTruckDelivery} from 'react-icons/tb'
import {MdHelp, MdFavorite} from 'react-icons/md'
import {FaWallet} from 'react-icons/fa'


const Navbar = () => {
  const [nav,setNav] = useState(false)
  return (

    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
        <div className='flex items-center'>
            <div onClick={()=>setNav(!nav)} className='cursor-pointer'>
              <AiOutlineMenu size={30} />
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
              MY <span className='font-bold'>YGO</span>
            </h1>
            
          </div>

          <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[]'>
          <AiOutlineSearch size={30} />
          <input className='bg-transparent p-2 focus:outline-none' type='text' placeholder='SEARCH!!!' />
        </div>

        <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
          <BsFillCartFill size={30} className='mr-2'/>CART
        </button>

        {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}
       

        <div className={nav ?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300' : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'}>
          <AiOutlineClose  onClick={()=>setNav(!nav)} size={30} className='absolute top-4 right-4 cursor-pointer '/>
          <h2 className='text-2xl p-4 '> 
           MY <span className='font-bold'>YGO!!</span>
          </h2>
          <nav>
            <ul className='flex flex-col p-4 text-gray-800 '>
              <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' />最新の商品
              </li>
              <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' />セール
              </li>
              <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' />定番のカード
              </li>
              <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' />HELP
              </li>
            </ul>
          </nav>
        </div>
       </div>
       
       

    
  )
}

export default Navbar