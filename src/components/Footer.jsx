import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <section className='bg-heading w-full px-10 py-6'>
            <div className='text-white flex justify-between border-slate border-b-[1px]  px-0 py-0'>
                <div>

                    <h1 className='font-bold text-2xl '>Teach the online world</h1>
                    <p className='mt-2 '>Create an online video course, reach students across the globe, and earn money</p>
                </div>
                <Link to='/teach'>
                    <p className='py-4 px-4 border-4 mb-7 font-medium border-white hover:bg-gray-500 duration-200 transition ease-in-out '>Teach on CourseShop</p>
                </Link>
            </div>
            <div className='text-white flex justify-between border-slate border-b-[1px]  px-0 py-0'>
                <div className='font-bold text-2xl mt-3 mb-7'>
                    <p className='mt-2 '>Top companies choose <span className='text-purple-400'>Udemy Business </span>to build in demand career kills</p>
                </div>
                {/* <a href='#' className='py-4 px-4 border-4 font-medium border-white '>Take on CourseShop</a> */}
            </div>
            <div className='text-white flex justify-between pb-12'>
                <div className='text-sm mt-3 mb-7 flex gap-[10rem]'>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:underline cursor-pointer'>Udemy Business</li>
                        <li className='hover:underline cursor-pointer'>Teach on Udemy</li>
                        <li className='hover:underline cursor-pointer'>Get App</li>
                        <li className='hover:underline cursor-pointer'>About us</li>
                        <li className='hover:underline cursor-pointer'>contact us</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:underline cursor-pointer'>Careers</li>
                        <li className='hover:underline cursor-pointer'>Blog</li>
                        <li className='hover:underline cursor-pointer'>Courses</li>
                        <li className='hover:underline cursor-pointer'>Affiliate</li>
                        <li className='hover:underline cursor-pointer'>Investor</li>
                    </ul>
                    <ul className='flex flex-col gap-2'>
                        <li className='hover:underline cursor-pointer'>Privacy policy</li>
                        <li className='hover:underline cursor-pointer'>Terms</li>
                        <li className='hover:underline cursor-pointer'>Cookie setting</li>
                        <li className='hover:underline cursor-pointer'>Sitemap</li>
                        <li className='hover:underline cursor-pointer'>Bitmap</li>
                    </ul>
                </div>
                <p className='mt-[12rem] text-sm'>©2024 CoursShop, Inc</p>
                {/* <a href='#' className='py-4 px-4 border-4 font-medium border-white '>Take on CourseShop</a> */}
            </div>
        </section>
    )
}

export default Footer
