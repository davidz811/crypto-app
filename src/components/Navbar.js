import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {FaBars , FaTimes} from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const {user, logOut} = UserAuth();
    const navigate = useNavigate();

    useEffect(() => {
        function handleResize() {
            setIsMobile (window.innerWidth <= 768);
        }

        window.addEventListener('resize' , handleResize);

        return () => {
            window.removeEventListener('resize' , handleResize);
        }
    })

    function handleToggle() {
        setToggle(!toggle);
    }

    async function handleSignOut() {
    try {
      await logOut();
      navigate("/")
    } catch(e) {
      console.log(e.message);
    }
  }

    return (
        <div className='h-20 max-w-[1250px] mx-auto w-full rounded-div'>
            <div className='h-full items-center flex justify-between font-bold'>
                <Link to='/'>
                    <h1 className='text-xl'>CryptoWorld</h1>
                </Link>
                <div className='hidden md:block'>
                    <ThemeToggle />
                </div>
                {user?.email ? (
                    <div className='hidden md:flex items-center text-lg'>   
                    <div className='px-6'>
                        <Link to='/account'>
                            <p>Account</p>
                        </Link>
                    </div>
                    <div className=' px-3 py-1 ml-2 text-lg'>
                        <Link to='/'>
                            <button onClick={handleSignOut}>Sign Out</button>
                        </Link>
                    </div>
                </div>
                ) : (
                    <div className='hidden md:flex items-center text-lg'>   
                        <div className='px-6'>
                            <Link to='/signIn'>
                                <p>Sign In</p>
                            </Link>
                        </div>
                        <div className='text-white bg-blue-400 px-3 py-1 ml-2 rounded-lg text-lg'>
                            <Link to='/signUp'>
                                <p>Sign up</p>
                            </Link>
                        </div>
                    </div>
                )}
                
                {/* mobile icons */}
                <div className='md:hidden cursor-pointer' onClick={handleToggle}>
                    {!toggle ? <FaBars /> : <FaTimes />}
                </div>
            </div>
            {/* mobile menu */}
            {isMobile &&
            <div>
                {toggle ? (
                <ul className='flex flex-col items-center h-screen justify-center duration-300'>
                    <li className='py-6'>
                        <Link to='/' className='font-bold' onClick={handleToggle}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/account' className='font-bold' onClick={handleToggle}>
                            Account
                        </Link>
                    </li>
                    <li className='py-6'>
                        <div className='font-bold' onClick={handleToggle}>
                            <ThemeToggle />
                        </div>
                    </li>
                    <li className='font-bold max-w-[240px] w-full flex justify-between py-5'>
                        <Link to='/signIn' className='text-lg' onClick={handleToggle}>
                            Sign In
                        </Link>
                        <Link to='/signUp' className='text-white bg-blue-400 px-3 py-1 ml-2 rounded-lg text-lg' onClick={handleToggle}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                ) : ''}
            </div>
        }
        </div>
    )
}

export default Navbar