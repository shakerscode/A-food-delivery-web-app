import React from 'react';
import bike from '../../img/delivery.png'
import bannerBg from '../../img/heroBg.png'
import { motion } from 'framer-motion'
import { heroData } from '../InternalData';

const Home = () => {
    return (
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-5 mt-5 px-3 overflow-hidden'>
            <div className='md:px-6 px-2 md:mt-5 mt-2'>
                <div className='flex justify-between items-center mr-auto w-48 bg-red-200 px-3 py-1 rounded-full my-2 mb-4'>
                    <h1 className='text-sm text-gray-900'>Fastest Delivery</h1>
                    <img src={bike} alt="biker" className='w-12 bg-white rounded-full px-1' />
                </div>
                <div>
                    <h1 className='md:text-big text-5xl font-bold text-gray-900 p-2 my-5'>Get Super Fastest Delivery In <span className='text-red-500'>Your City</span> </h1>
                </div>
                <p className='pb-5 pl-2 text-center md:text-left'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima quidem nihil, ducimus, labore quibusdam corrupti aut vel voluptates dolore consequuntur quod. Labore, atque aspernatur sequi nam odit provident iure ad?</p>
                <motion.button
                    whileTap={{ scale: 0.5 }}
                    className='bg-red-500 border-none outline-none px-5 py-2 text-lg w-full md:w-auto rounded-full text-white hover:border hover:border-red-500 hover:bg-white hover:text-gray-900 transition-all ease-in-out duration-100 drop-shadow-md'>Order Now</motion.button>
            </div>
            <div className='md:pr-6 py-3'>
                <div className='flex flex-1 justify-center  md:justify-end  relative'>
                    <img src={bannerBg} alt="" className='h-[600px]' />
                    <div className='w-full h-full absolute top-0 left-0 flex flex-wrap gap-2 justify-center items-center px-32 py-4'>
                        {heroData && heroData.map((n, i)=>(
                        <div key={i} className='w-[180px] min-w-[160px] h-[160px] card-bg backdrop-blur-md rounded-2xl flex flex-col justify-center items-center'>
                            <img src={n.image} alt="Ice Cream" className='w-32 -mt-14 mx-auto' />
                            <div className='text-center mt-1'>
                                <p className='text-lg font-bold text-gray-900'>{n.name}</p>
                                <p className='text-sm text-gray-600 '>{n.desc}</p>
                                <p className='font-bold'><span className='font-bold text-red-500 mr-1'>$</span>{n.price}</p>
                            </div>
                        </div>
                        ))}


                    </div>
                </div>


            </div>
        </div>
    );
};

export default Home;