import React from 'react'

const Achivements = () => {
  return (
    <div className='flex justify-around px-[15rem] py-10 bg-[#5022c3]'>
      <div className='flex flex-col justify-center text-white items-center'>
        <h1 className='font-extrabold font-outfit text-3xl'>73M</h1>
        <p>Students</p>
      </div>
      <div className='flex flex-col justify-center text-white items-center'>
        <h1 className='font-extrabold font-outfit text-3xl'>75+</h1>
        <p>Languages</p>
      </div>
      <div className='flex flex-col justify-center text-white items-center'>
        <h1 className='font-extrabold font-outfit text-3xl'>1B</h1>
        <p>Enrollements</p>
      </div>
      <div className='flex flex-col justify-center text-white items-center'>
        <h1 className='font-extrabold font-outfit text-3xl'>180</h1>
        <p>Countries</p>
      </div>
    </div>
  )
}

export default Achivements
