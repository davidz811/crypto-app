import React from 'react'
import ThemeToggle from './ThemeToggle'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='px-2 max-w-[1140px] w-full mx-auto my-3'>
        <div className='flex w-full'>
            <div className='grid md:grid-cols-2 w-full'>
                    <div>
                    <h1 className='font-bold my-2'>SUPPORT</h1>
                        <ul>    
                            <li className='text-sm py-1'>HELP CENTER</li>
                            <li className='text-sm py-1'>CONTACT US</li>
                            <li className='text-sm py-1'>API STATUS</li>
                            <li className='text-sm py-1'>DOCUMENTATION</li>
                        </ul>
                    </div>
                    <div className=''>
                    <h1 className='font-bold my-2'>INFO</h1>
                        <ul>
                            <li className='text-sm py-1'>ABOUT US</li>
                            <li className='text-sm py-1'>CAREERS</li>
                            <li className='text-sm py-1'>INVEST</li>
                            <li className='text-sm py-1'>LEGAL</li>
                        </ul>
                    </div>
            </div>
            <div className='flex-col md:w-[370px] text-right'>
                <div className='flex justify-end my-2'>
                    <ThemeToggle />
                </div>
                <p className='py-3 font-bold'>Sign Up to find out more</p>             
                    <Link to={"/signUp"} className='md:w-full'>
                        <button className='bg-button text-btnText p-2 rounded-2xl'>Sign Up</button>
                    </Link>           
            </div>
        </div>
    </div>
  )
}

export default Footer