import { useState } from 'react'
import { coursesData } from '../data/courseData'
import Slider from 'react-slick';

const Popular = () => {
  const [courseType, setCourseType] = useState('new')
  const [hover, setHover] = useState(null)

  const handleHover = (item) => {
    setHover(item)
  }

  const handleHoverLeave = () => {
    setHover(null)
  }

  var settings = {
    dots: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className='max-container my-10'>
      <h1 className='text-2xl font-semibold py-4'>Featured courses</h1>
      <div className='max-container font-outfit text-xl font-medium flex gap-5 text-slate'>
        <button onClick={() => setCourseType('new')} className={`hover:text-black  ${courseType === 'new' ? 'text-black font-medium' : ''}`}>New</button>
        <button onClick={() => setCourseType('mostPopular')} className={`hover:text-black  ${courseType === 'mostPopular' ? 'text-black font-medium' : ''}`}>Most Popular</button>
        <button onClick={() => setCourseType('intermediateAdvanced')} className={`hover:text-black  ${courseType === 'intermediateAdvanced' ? 'text-black font-medium' : ''}`}>Intermediate</button>
      </div>

      <div className='max-container'>
        <Slider className='text-black' {...settings}>
          {coursesData[courseType].map((d, i) => (
            <div className='relative' key={i}>
              <div className="py-4 pr-4 cursor-pointer" key={i}
                onMouseEnter={() => handleHover(d.title)}
                onMouseLeave={handleHoverLeave}
              >
                {hover === d.title && (
                  <div className='absolute z-10 w-[20rem] shadow-xl bg-white px-4 py-4' 
                       style={{ 
                         top: '0', 
                         left: i % 4 === 3 ? '-50%' : '130%', 
                         transform: 'translateX(-50%)' 
                        }}>
                    <h1 className='text-xl font-outfit mt-2 font-semibold'>{d.title}</h1>
                    <p className='text-purple-400 text-sm mt-2'>Updated on<span className='font-bold text-sm text-purple-400'> August 2024</span></p>
                    <p className='flex gap-3 text-md items-center font-bold'><span className='text-sm font-medium'>{d.rating}</span>{d.price}</p>
                    <p className='text-slate text-sm mt-1'>{d.description}</p>
                    <p className='px-20 py-3 mt-3 text-center font-bold text-white rounded-md hover:bg-purple-500 duration-200 ease-in-out bg-purple-400'>Add to cart</p>
                  </div>
                )}
                <div className="bg-white overflow-hidden hover:bg-[#ececec] duration-200 transition ease-in-out p-2">
                  <div className="h-40 bg-cover border-[1px] border-[#b6b6b6]" style={{ backgroundImage: `url(${d.image})` }}>
                  </div>
                  <div className="">
                    <p className="text-md font-bold font-outfit mt-2">{d.title}</p>
                    <p className="text-sm text-slate mt-1">{d.desc}</p>
                    <div className="flex justify-between text-sm mt-1 text-heading font-medium">
                      <span className="hover:underline cursor-pointer"> {d.instructor}</span>
                    </div>
                    <p className="font-bold text-sm mt-1 ">({d.rating})<span className='font-light'> ({d.reviews})</span></p>
                    <div className='flex items-center gap-2 mt-2'>
                      <span className='font-bold'>{d.price} </span><p className='line-through font-thin font-outfit text-sm'>{d.originalPrice}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default Popular
