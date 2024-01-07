import React, { useState } from 'react'
import {BsChevronCompactLeft,  BsChevronCompactRight} from "react-icons/bs";
import {RxDotFilled} from "react-icons/rx";


const Featured = () => {

    const sliders =[
        {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672076/NetflixApp/burger_emxbtv.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672452/NetflixApp/pizza_osjb4f.jpg'
          },
          {
            url: 'https://res.cloudinary.com/ehizeex-shop/image/upload/v1672672612/NetflixApp/ric_a4ewxo.jpg',
          },
    ];

    const[currentIndex,setcurrentIndex]=useState(0)

    const prevSlider = ()=>{
      const isCurrent= currentIndex === 0;
      const newIndex = isCurrent ? sliders.length -1 :currentIndex-1
      setcurrentIndex(newIndex)
    }
    const nextslder =()=>{
      const isslider =currentIndex ===sliders.length -1;
      const newSlider = isslider ?0 :currentIndex+1 
      setcurrentIndex(newSlider)
    }
    const moveToSlide=(SliderIndex)=>{
      setcurrentIndex(SliderIndex)
    }



  return (
    <div className=' max-w-[1520px] h-[500px] w-full py-4 px-4 relative group'>
      <div className=' w-full h-full rounded-2xl  bg-cover duration-500 '
style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
></div>
<div className=' hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-yellow-500'>
  <BsChevronCompactLeft onClick={prevSlider} />
</div>
<div  className=' hidden group-hover:block absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-yellow-500'>
  <BsChevronCompactRight onClick={nextslder}/>
</div>
<div className='flex top-4 justify-center py-2'>
  {sliders.map((sliderItem,SliderIndex)=>(
    <div key={SliderIndex} 
    onClick={()=>moveToSlide(SliderIndex)}
    className=' text-2xl cursor-pointer'>
      <RxDotFilled/>
    </div>
  ))}
</div>
    </div>
  )
}

export default Featured