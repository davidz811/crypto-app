import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import {HiSun, HiMoon} from 'react-icons/hi';

const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    // console.log(theme)

    function handleToggle() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div>
            {theme === 'dark' ? (
                <div className='flex items-center cursor-pointer' onClick={handleToggle}>
                    <HiSun />
                    Light Mode
                </div>
            ) : (
                <div className='flex items-center cursor-pointer' onClick={handleToggle}>
                    <HiMoon />
                    Dark Mode
                </div>
            )}
        </div>
    )
}

export default ThemeToggle