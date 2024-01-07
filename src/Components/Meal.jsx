import React, { useState } from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";

import { mealData } from '../data'

const Meal = () => {
const[foods,setfoods]=useState(mealData);
const filterCat =(category)=>{
    setfoods(
        mealData.filter((item)=>{
            return item.category===category
        })
    )
}
  return (
    <div className='max-w-[1520] m-auto px-4 py-12 '>
<h1 className=' text-yellow-500 font-bold text-2xl text-center py-2'>Our Meal</h1>
<div className='flex flex-col lg:flex-row justify-center'>
<div className='flex justify-center md:justify-center'>

    <button onClick={()=>setfoods(mealData)}  className='m-1 border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:text-white'>All</button>
    <button onClick={()=>filterCat("pizza")} className='m-1 border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:text-white'>Pizza</button>
    <button onClick={()=>filterCat("chicken")} className='m-1 border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:text-white'>Chicken</button>
    <button onClick={()=>filterCat("salad")} className='m-1 border-yellow-500 bg-yellow-500 text-white hover:bg-black hover:text-white'>Salad</button>
</div>

</div>
<div className='grid md:grid-flow-col-2 sm:grid-flow-col-1 lg:grid-cols-4 gap-6 py-4'>
    {
        foods.map((item)=>(
            
                <div key={item.id} className='border-none hover:scale-105 duration-300'>
                    <img 
                    className=' w-full h-[200px] object-cover rounded-lg '
                    src={item.image} alt={item.name} />
                    <div className='flex justify-between py-2 px-2'>
                        <p className='font-bold'>{item.name}</p>
                        <p className='bg-yellow-500 h-18 rounded-full -mt-10 text-white py-4 px-2 border-8'>{item.price}</p>
                    </div>

                    <div className='pl-2 py-4 -mt-7'>
                        <p className='flex items-center text-indigo-700'>View More <AiOutlineArrowRight className='w-5 ml-2'/></p>
                    </div>
              

                </div>
            
        ))
    }
</div>

    </div>
  )
}

export default Meal