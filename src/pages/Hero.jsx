import React, { useState } from 'react'
import Corousel from '../components/Corousel'
import LearnNext from '../components/LearnNext'
import Popular from '../components/Popular'
import Recomeded from '../components/Recomeded'


const Hero = () => {
    const [isDismissed, setIsDismissed] = useState(false)

    const handleDismiss = () => {
        setIsDismissed(true)
    }
    return (
        <section className='max-container'>
            <div>
                <Corousel />

            </div>
            <div className='flex items-center justify-between mt-4'>
                <h1 className='mt-[24rem] text-4xl font-fancy font-bold'>Start leaning</h1>
                <h1 className='font-bold text-purple-500 text-l mt-[24rem] cursor-pointer'>My learning</h1>
            </div>
            <div>
                <p className='text-gray-400 mt-4 text-[1rem] text-center'>You have no recent activity</p>
            </div>
            {!isDismissed && (

                <div className='flex flex-1 justify-between bg-[#414141] text-white py-4 px-5 mt-6 items-center'
                
                
                >
                <p><span className='font-bold'>Training people?</span> Get your access to udemy business with 26000+ courses</p>
                <div className='flex gap-12 mr-20'>

                    <a className=' py-2 px-3 bg-white font-bold text-sm text-black font-outfit' href="">Get udemy business</a>
                    <button className=' py-2 px-3 border-white border-2 text-sm font-bold font-outfit' value="Dismiss"
                    onClick={handleDismiss}
                    >Dismiss</button>
                </div>
            </div>
            )}
            <LearnNext />
            <Recomeded />
            <Popular />
        </section>
    )
}

export default Hero
