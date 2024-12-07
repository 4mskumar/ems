import React, { useState } from 'react';
import { PiHeartStraightBold } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { useAuth0 } from "@auth0/auth0-react";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    const { loginWithRedirect, isAuthenticated, isLoading, logout , user} = useAuth0();

    const handleMouseEnter = (item) => {
        setHoveredItem(item);
    };

    const handleMouseLeave = () => {
        setHoveredItem(null);
    };

    return (
        <section className='w-full font-outfit text-sm mt-3 z-10'>
            <div className='flex px-9 justify-between items-center mb-4'>
                <Link to='/'>
                <h1 className='text-heading text-2xl font-semibold font-outfit cursor-pointer'>
                    Course<span className='font-medium text-black'>Shop</span>
                </h1>
                </Link>
                <input
                    type='text'
                    placeholder='Search for anything'
                    className='w-[40%] mr-10 outline-none border border-[#6a6f73] px-6 py-3 rounded-full'
                />
                <ul className='flex gap-12 items-center cursor-pointer text-heading'>
                    <li
                        className='hover:underline'
                        onMouseEnter={() => handleMouseEnter('New courses')}
                        onMouseLeave={handleMouseLeave}
                    >New courses
                        {hoveredItem === 'New courses' && (
                            <div className='absolute mt-10 border-[1px] px-3 py-2 bg-white border-gray flex flex-col items-center gap-3'>
                                <p className='font-bold text-md bg-back  px-10 py-3  text-white'><a href=''>Go to courses</a></p>
                            </div>

                        )}

                    </li>
                    <li className='hover:underline'>Business</li>
                    <li className='hover:underline'
                        onMouseEnter={() => handleMouseEnter('My learning')}
                        onMouseLeave={handleMouseLeave}
                    >My learning

                        {hoveredItem === 'My learning' && (
                            <div className='absolute mt-10 border-[1px] px-3 py-2 bg-white border-gray flex flex-col items-center gap-3'>
                                <p className='font-light text-sm mt-1'>No activity</p>
                                <p className='font-bold text-md bg-back  px-10 py-3  text-white'><a href=''>Go to courses</a></p>
                            </div>
                        )}

                    </li>
                    <li className='text-[1.5rem]'>
                        <PiHeartStraightBold height={25} width={25} />
                    </li>
                    <li className='text-[1.5rem]'>
                        <Link to='/shop'>
                            <GrCart height={25} width={25} />
                        </Link>
                    </li>
                    {isAuthenticated && (
                        <li className='font-bold font-outfit text-lg text-purple-700'>Welcome, {user.name}</li>
                    )}
                    {isAuthenticated ? (
                        <button className='px-5 font-bold text-md py-3 border-2 border-heading hover:bg-heading hover:text-white ' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                          Log Out
                        </button>
                    ) : 
                    (
                            <li><button className='px-5 font-bold text-md py-3 border-2 border-heading hover:bg-heading hover:text-white' onClick={() => loginWithRedirect()}>Log In</button></li>
                      )
                    }
                    
                </ul>
            </div>
            <div className='w-full border-t-2'>
                <ul className='flex flex-1 items-center justify-center gap-10 mt-3 shadow-xl pb-3 text-slate  cursor-pointer'>
                    <li
                        onMouseEnter={() => handleMouseEnter('Development')}
                        onMouseLeave={handleMouseLeave}
                        className='p-2'
                    >
                        Development
                        {hoveredItem === 'Development' && (
                            <div className='absolute mt-2 w-[150px] bg-gray-700 shadow-lg rounded-lg z-50'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Web Development</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Mobile Development</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Game Development</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('Finance & Accounting')}
                        onMouseLeave={handleMouseLeave}
                        className='p-2'
                    >
                        Finance & Accounting
                        {hoveredItem === 'Finance & Accounting' && (
                            <div className='absolute mt-2 w-[150px] bg-gray-700 shadow-lg rounded-lg z-50'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Accounting</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Investing</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Financial Analysis</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('IT & Software')}
                        onMouseLeave={handleMouseLeave}
                        className='p-2'
                    >
                        IT & Software
                        {hoveredItem === 'IT & Software' && (
                            <div className='absolute mt-2 w-[150px] bg-gray-700 shadow-lg rounded-lg z-50'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Network & Security</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Operating Systems</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Databases</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('Office Productivity')}
                        onMouseLeave={handleMouseLeave}
                        className='p-2'
                    >
                        Office Productivity
                        {hoveredItem === 'Office Productivity' && (
                            <div className='absolute mt-2 w-[150px] bg-gray-700 shadow-lg rounded-lg z-50'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Microsoft</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Google</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>SAP</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('Design')}
                        onMouseLeave={handleMouseLeave}
                        className='p-2'
                    >Design
                        {hoveredItem === 'Design' && (
                            <div className='absolute mt-2 w-[150px] bg-gray-700 shadow-lg rounded-lg z-50'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 text-white  hover:bg-gray-800'>Illustraton</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Game Design</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>UI/UX</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Web Design</li>
                                </ul>
                            </div>
                        )}
                    </li>
                    <li
                        onMouseEnter={() => handleMouseEnter('Music')}
                        onMouseLeave={handleMouseLeave}
                        className='p-2'

                    >Music
                        {hoveredItem === "Music" && (
                            <div className='absolute mt-2 w-[150px] bg-gray-700 shadow-lg rounded-lg z-50'>
                                <ul className='py-2'>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Music Software</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Music Technique</li>
                                    <li className='px-4 py-2 text-white hover:bg-gray-800'>Vocal</li>
                                </ul>
                            </div>

                        )}

                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Nav;
