import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { HeroDatas } from '../data/HeroDatas';

const Corousel = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    
  };

  return (
    <div className='max-container z-0'> {/* Removed negative z-index */}
      <div className='mt-12 max-container h-4 z-0'>
        <Slider {...settings}>
          <div className='relative bg-[url("https://img-c.udemycdn.com/notices/featured_carousel_slide/image/9ea59bc2-bd61-463e-9ce9-7e71e8e586ae.jpg")] h-[25rem] z-10'> {/* Set z-index and position */}
            <div className='relative px-8 pb-8 pt-4 shadow-lg bg-white inline-block mt-10 mx-[3rem]'>
              <h1 className='font-bold font-fancy text-4xl mb-1'>Code Your Future</h1>
              <p>Take control of your career. Learn the latest skills in <a className='text-blue-700 hover:underline' href="https://www.udemy.com/courses/development/web-development/?locale=en_US" target='_blank'>Web Development</a></p>
            </div>
          </div>
          <div className='relative bg-[url("https://img-c.udemycdn.com/notices/web_carousel_slide/image/df60a0a5-b916-4784-935a-e47b347e586d.png")] h-[25rem] z-10'> {/* Set z-index and position */}
            <div className='relative px-8 pb-8 pt-4 shadow-lg bg-white inline-block mt-10 mx-[3rem]'>
              <h1 className='font-bold font-fancy text-4xl mb-1'>Code Your Future</h1>
              <p>Take control of your career. Learn the latest skills in <a className='text-blue-700 hover:underline' href="https://www.udemy.com/courses/development/web-development/?locale=en_US" target='_blank'>Web Development</a></p>
            </div>
          </div>
          <div className='relative bg-[#E9FF97] bg-[url("https://img-c.udemycdn.com/notices/featured_carousel_slide/image/5bf6274c-4a57-42ce-93d6-9775b06730be.jpg")] h-[25rem] z-10'>
            <div className='relative px-8 pb-8 pt-4 shadow-lg bg-white inline-block mt-10 mx-[3rem]'>
              <h1 className='font-bold font-fancy text-4xl mb-1'>Slow and steady</h1>
              <p>Try learning just 5–10 minutes a day.</p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Corousel;
