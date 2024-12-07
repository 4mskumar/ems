import React from 'react'
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";

const LearnNext = () => {
    return (
        <section className='max-container'>
            <h1 className='font-bold font-fancy text-5xl mt-6 '>What to learn next</h1>
            <p className='font-bold font-outfit text-2xl mt-6'>Our top pick for you</p>
            <a href='#' className=''>

            <div className='border-[0.5px] hover:bg-[#f1f1f1] transition duration-150 ease-in border-[#b6b6b6] px-4 py-3 mt-4 flex flex-1 '>
                <img src='https://img-c.udemycdn.com/course/480x270/1565838_e54e_18.jpg' />
                <div className='ml-4 w-2/5'>
                    <span className='font-bold font-outfit text-2xl'>The Complete 2024 Web Development Bootcamp</span>
                    <p className='mt-2 text-heading'>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <p className='text-sm text-slate mt-1'>By Dr. Angela Yu, Developer and Lead Instructor</p>
                    <div className='flex items-center mt-2'>
                        <p className='font-medium mr-2'>4.5</p>
                        <IoStar color='orange'/>
                        <IoStar color='orange'/>
                        <IoStar color='orange'/>
                        <IoStar color='orange'/>
                        {/* <IoStar />
                        <IoStar />
                        <IoStar /> */}
                        <IoStarHalf color='orange' />
                        <p className='bg-[#eceb98] px-1 text-sm font-bold text-heading ml-2'>Bestseller</p>
                    </div>
                </div>
            </div>
            </a>
        </section>
    )
}

export default LearnNext
