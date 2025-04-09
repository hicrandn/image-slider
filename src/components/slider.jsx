import React, { useState } from 'react'
import { captions, images } from '../data'
import { ArrowLeft, ArrowRight } from 'lucide-react'

// Rastgele bir sayı üretme fonksiyonu
const getRandomNumber = () => Math.floor(Math.random() * 41) - 20;

const Slider = () => {
  const [index, setIndex] = useState(0)

  return (
    <div className='relative'>
      {/* Slider container */}
      <div className='flex gap-x-20 lg:items-start items-center lg:flex-row flex-col'>
        {/* Images */}
        <div className='sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative'>
          {images.map((image, i) => (
            <img
              key={i} 
              src={image}
              className={`w-full h-full absolute object-cover rounded-3xl
                transition-all duration-300
                ${i === index ? "activeImage" : "inactiveImage"}`}
              style={{ transform: `rotate(${i === index ? 0 : getRandomNumber()}deg)` }}
            />
          ))}
        </div>

        {/* Description */}
        <div className='relative sm:w-[400px] sm:h-[400px] mt-22 lg:mt-5'>
          {captions.map((cap, i) => (
            <p
              className={`text-center sm:text-xl text-gray-600 absolute 
                transition-all duration-300
                ${i === index ? "activeCap delay-200" : "inactiveCap"}`}
              key={i}
            >
              {cap}
            </p>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className='absolute bottom-0 lg:bottom-20 left-1/2 -translate-x-1/2 flex gap-x-5'>
        <button
          className='bg-gray-100 p-1.5 rounded-full cursor-pointer text-gray-600 
            hover:bg-gray-200 transition-colors duration-300'
          onClick={() =>
            setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
        >
          <ArrowLeft size= {20}/>
        </button>

        <button
          className='bg-gray-100 p-1.5 rounded-full cursor-pointer text-gray-600 hover:bg-gray-200 transition-colors duration-300'
          onClick={() =>
            setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
        >
          <ArrowRight size= {20}/>
        </button>
      </div>
    </div>
  )
}

export default Slider
