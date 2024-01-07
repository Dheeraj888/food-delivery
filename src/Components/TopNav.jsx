import React, { useState } from 'react'
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose} from "react-icons/ai";
import { BsFillCartFill,BsPersonFill } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";
import { FaGoogleWallet } from "react-icons/fa";
import { MdHelp, MdOutlineFavorite} from "react-icons/md";


const TopNav = () => {
    const [showNav,setShowNav]=useState(false)

    const showHandler=()=>{
        setShowNav(!showNav)
    }
   

  return (
    <div className='topnav max-w-[1520px] mx-auto flex justify-between items-center p-4' >
        <div className='flex items-center'>
            <div onClick={showHandler} className='cursor-pointer'>
                <AiOutlineMenu size={25}/>
            </div>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'> Dee
            <span className=' font-bold'>Foods</span>
            </h1>
            <div className=' hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px] '>
                <p className=' rounded-full p-2 text-bold '>Free</p>
                <p className='p-2 rounded-full  bg-yellow-500 text-bold'>Delivery</p>
            </div>
        </div> 
        <div className=' bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] '>
            <AiOutlineSearch size={25}/>
            <input type="text" placeholder='Search meals' className='bg-transparent p-2 w-full focus:outline-none ' />
        </div>
        <button className='bg-yellow-500 text-black hidden md:flex items-center py-2 rounded-full '> 
        <BsFillCartFill/> Cart</button>
        {
            showNav? (
        <div  onClick={showHandler} className=' bg-black/60 fixed w-full h-screen z-10 top-0 left-0'></div>

            ): ("")
        }

        <div className={showNav ?"fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                             : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"}>
<AiOutlineClose onClick={showHandler} className=' absolute right-4 top-4  ' size={25}/>

<h2 className=' text-2xl p-4  '>Dee <span className=' text-yellow-500 font-bold '>Foods</span></h2>

<nav>
    <ul className='flex flex-col p-4 text-gray900'>
        <li className='text-xl py-4 flex'>
            <BsPersonFill size={25} className='mr-4 text-white bg-black rounded-full'/>
            My Account

        </li>
        <li className='text-xl py-4 flex'>
            <TbTruckReturn size={25} className='mr-4 text-white bg-black rounded-full'/>
            Delivery

        </li>
        <li className='text-xl py-4 flex'>
            <MdOutlineFavorite size={25} className='mr-4 text-white bg-black rounded-full'/>
            My Favrouite

        </li>
        <li className='text-xl py-4 flex'>
            <FaGoogleWallet size={25} className='mr-4 text-white bg-black rounded-full'/>
            My Wallet

        </li>
        <li className='text-xl py-4 flex'>
            <MdHelp size={25} className='mr-4 text-white bg-black rounded-full'/>
            HELP

        </li>

    </ul>
</nav>

        </div>
    </div>
  )

}

export default TopNav