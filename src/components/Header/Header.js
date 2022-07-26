import React, { useState } from 'react';
import Avatar from '../../img/avatar.png';
import { FaShoppingCart, FaPlusCircle, FaRegistered, FaSignInAlt } from 'react-icons/fa'
import { IoLogOut } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import Logo from '../../img/logo.png'

const Header = () => {
    //  Setting the modal state
    const [displayMenu, setDisplayMenu] = useState(false)

    return ( 
        <header className='flex justify-between items-center px-5 py-3 md:py-5 w-full h-20'>
            <Link to='/'><motion.div
                whileTap={{ scale: 0.9 }}
                className='flex justify-center items-center gap-1'>
                <img className='w-10 h-10' src={Logo} alt="logo" />
                <h1 className='text-2xl font-bold'>TakeWay <span className='text-red-600'>Corner</span></h1>
            </motion.div>
            </Link>
            <div className='flex justify-between items-center gap-9'>
                <ul className='hidden md:flex items-center gap-10'>
                    <Link to='/'>
                        <li
                            onClick={() => setDisplayMenu(false)}
                            className=' text-gray-600 hover:text-gray-900 duration-100 transition-alle ease-in-out text-lg cursor-pointer'>Home</li>
                    </Link>
                    <Link to='/menu'>
                        <li
                            onClick={() => setDisplayMenu(false)}
                            className=' text-gray-600 hover:text-gray-900 duration-100 transition-alle ease-in-out text-lg cursor-pointer'>Menu</li>
                    </Link>
                    <Link to='/about'>
                        <li
                            onClick={() => setDisplayMenu(false)}
                            className=' text-gray-600 hover:text-gray-900 duration-100 transition-alle ease-in-out text-lg cursor-pointer'>About</li>
                    </Link>
                    <Link to='/services'>
                        <li
                            onClick={() => setDisplayMenu(false)}
                            className=' text-gray-600 hover:text-gray-900 duration-100 transition-alle ease-in-out text-lg cursor-pointer'>Services</li>
                    </Link>
                </ul>
                <div className='flex justify-between items-center gap-8'>
                    <motion.div
                        whileTap={{ scale: 0.6 }}
                        className='relative w-5 h-5'>
                        <FaShoppingCart className='text-xl md:text-2xl cursor-pointer rounded-md text-gray-700' />
                        <div className='absolute -top-3 left-3 md:-top-4 md:left-3 bg-red-600 text-center rounded-full h-5 w-5'>
                            <p className='text-sm text-white font-semibold flex justify-center items-center'>10</p>
                        </div>
                    </motion.div>
                    <div onClick={() => setDisplayMenu(!displayMenu)} className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.5 }}
                            src={Avatar}
                            alt="avatar"
                            className='w-10 h-10 cursor-pointer drop-shadow-md' />
                    </div>
                    {
                        displayMenu &&
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0}}
                            className='bg-white drop-shadow-md rounded-md px-3 py-2 absolute top-16 right-8'>
                            <ul className='md:hidden lg:hidden flex flex-col gap-2 items-center '>
                                <Link to='/'><li className=' text-gray-900  text-md cursor-pointer'>Home</li></Link>
                                <Link to='/menu'><li className=' text-gray-900  text-md cursor-pointer'>Menu</li></Link>
                                <Link to='/about'><li className=' text-gray-900  text-md cursor-pointer'>About</li></Link>
                                <Link to='/services'><li className=' text-gray-900  text-md cursor-pointer'>Services</li></Link>
                            </ul>
                            <Link to='/add-product'><motion.div
                                onClick={() => setDisplayMenu(false)}
                                whileTap={{ scale: 0.7 }}
                                className='flex justify-center items-center gap-2 text-md text-gray-900 px-2  mt-1 w-full rounded-md py-1 hover:bg-red-500 hover:text-white transition-all ease-in-out duration-100'
                                to='/add-product'>Add Product <FaPlusCircle className='' /></motion.div>
                            </Link>
                            <Link to='/register'>
                                <motion.div
                                    onClick={() => setDisplayMenu(false)}
                                    whileTap={{ scale: 0.7 }}
                                    className='flex justify-center items-center gap-2 text-md text-gray-900 px-2  mt-1 w-full rounded-md py-1 hover:bg-red-500 hover:text-white transition-all ease-in-out duration-100' to='/register'>Register
                                    <FaRegistered className='' /></motion.div>
                            </Link>
                            <Link to='/login'><motion.div
                                onClick={() => setDisplayMenu(false)}
                                whileTap={{ scale: 0.7 }}
                                className='flex justify-center items-centezr gap-2 text-md text-gray-900 px-2 mt-1 w-full rounded-md py-1 hover:bg-red-500 hover:text-white transition-all ease-in-out duration-100' to='/login'>Log In
                                <FaSignInAlt className='' /></motion.div>
                            </Link>
                            <Link to='/logout'><motion.div
                                onClick={() => setDisplayMenu(false)}
                                whileTap={{ scale: 0.7 }}
                                className='flex justify-center items-center gap-2 text-md text-gray-900 px-2 mt-1 w-full rounded-md py-1 hover:bg-red-500 hover:text-white transition-all ease-in-out duration-100' to='/login'>Log Out
                                <IoLogOut className='' /></motion.div>
                            </Link>
                        </motion.div>
                    }
                </div>
            </div>
        </header>
    );
};

export default Header;