import React from 'react'
import Achivements from './Achivements'
import HowToBegin from './HowToBegin'

const NavComp = () => {
    
  return (
    <div>
       <div className='flex  flex-col items-center  '>
            <img src='https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg'></img>
            <div className='absolute flex-col flex mt-16 items-start left-[15rem]'>
                <p className='font-fancy text-6xl text-heading font-bold '>Come teach<br /> with us</p>
                <p className='text-lg font-outfit text-heading mt-3'>Become instructor and change lives</p>
                <p className='text-lg font-outfit text-heading'>-including your own</p>
                <a href='' className='px-16 text-lg py-2 mt-4 bg-heading text-white font-bold'>Get started</a>
            </div>
       </div>
       <div className='max-container'>
            <h1 className='text-center font-fancy font-bold text-heading text-6xl my-16'>So many reason to start</h1>
            <div className=''>
                <ul className='flex gap-16 items-center mb-24 justify-center'>
                    <li className='w-[22%] text-center flex- flex-col items-center justify-center'>
                        <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg' />
                        <h1 className='font-outfit font-bold text-md'>Teach your own way</h1>
                        <p className='font-outfit text-md leading'>Publish the course you want, in the way you want, and always have control of your own content.</p>
                    </li>
                    <li className='w-[22%] text-center flex- flex-col items-center justify-center'>
                        <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg' />
                        <h1 className='font-outfit font-bold text-md'>Inspire learners</h1>
                        <p className='font-outfit text-md leading'>Teach what you know and help learners explore their interests, gain new skills, and advance their careers.</p>
                    </li>
                    <li className='w-[22%] text-center flex- flex-col items-center justify-center'>
                        <img className='mx-auto' src='https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg' />
                        <h1 className='font-outfit font-bold text-md'>Get rewarded</h1>
                        <p className='font-outfit text-md leading'>Expand your professional network, build your expertise, and earn money on each paid enrollment.</p>
                    </li>
                </ul>
            </div>
       </div>
       <div>
        <Achivements />
       </div>
       <div>
        <HowToBegin />
       </div>
    </div>
  )
}

export default NavComp
