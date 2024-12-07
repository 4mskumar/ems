import React from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const Shop = () => {
  return (
    <section className='max-container'>
      {/* <Nav /> */}
      <div>
        <h1 className='text-4xl mt-10 text-heading font-outfit font-bold'>Shopping Cart</h1>
        <p className='text-lg mt-2 text-heading font-outfit font-semibold'>0 courses in cart </p>
        <div className='flex flex-1 border-[0.1px] border-[#d0d0d0] mt-3 items-center flex-col'>
            <img src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg"></img>
            <p className='text-heading text-md font-medium mt-5'>Your cart is empty. Keep shopping to find a course!</p>
            <button className='text-white bg-purple-400 my-10 px-3 py-3 hover:bg-purple-500 rounded-lg duration-150 ease-in-out font-bold'>Keep shopping</button>
        </div>
      </div>
      {/* <Footer /> */}
    </section>
  )
}

export default Shop
