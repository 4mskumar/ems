import React, { useState } from 'react'
import { HowToData } from '../data/HowToData'
import { Link } from 'react-router-dom'

const HowToBegin = () => {

    const [step, setStep] = useState('Plan')

    

  return (
    <div>
      <h1 className='font-semibold text-center mt-10 text-6xl font-fancy text-heading'>How to begin?</h1>
      <ul className='flex justify-center gap-16 mt-5 text-slate'>
        <li className={`hover:text-black text-2xl font-bold cursor-pointer ${step === 'Plan' ? 'text-black' : ''}`} onClick={() => setStep('Plan')}>Plan your curiculam</li>
        <li className={`hover:text-black text-2xl font-bold cursor-pointer ${step === 'Record' ? 'text-black' : ''}`} onClick={() => setStep('Record')}>Record your video</li>
        <li className={`hover:text-black text-2xl font-bold cursor-pointer ${step === 'Launch' ? 'text-black' : ''}`} onClick={() => setStep('Launch')}>Launch your course</li>
      </ul>

      {HowToData[step].map((d, i) => (
        <div className='flex max-container justify-center gap-6 mt-6 w-[50%]' key={i}>
            <div className='mt-[10rem]'>
                <p className='text-lg font-outfit font-medium'>{d.text}</p>
            </div>
            <img src = {d.imgUrl} />
        </div>        
      ))}
      <div className='bg-[#f7f9fa] py-12 text-center'>
        <h1 className='text-heading font-fancy font-semibold text-4xl'>Become an instructor today</h1>
        <p className='text-heading font-outfit font-medium text-xl mt-3 mb-10'>Join one of the world’s largest online learning marketplaces.</p>
        <Link to='/getstarted'>
          <a href='' className='px-16 text-lg py-2 mt-16 bg-heading  text-white font-bold'>Get started</a>
        </Link>
      </div>
    </div>
  )
}

export default HowToBegin
