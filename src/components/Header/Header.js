import React from 'react';
import Avatar from '../../img/avatar.png';

const Header = () => {
    return (
        <header className='flex justify-between items-center gap-3 px-5 py-2 h-14 bg-gray-400'>
            <div>
                <h1 className='text-2xl font-bold'>TakeWay Corner</h1>
            </div>
            <div className='flex justify-between items-center gap-8'> 
                    <ul className='flex justify-between items-center '>
                        <li className='ml-8 text-md'>Home</li>
                        <li className='ml-8 text-md'>Menu</li>
                        <li className='ml-8 text-md'>About</li>
                        <li className='ml-8 text-md'>Service</li>
                    </ul> 
                <div className='flex justify-between items-center gap-5'>  
                <div className='relative'> 
                        <div className=' bg-red-400 text-white rounded-full w-5 h-5 text-center'>
                            ct
                        </div>
                        <div className='absolute bg-red-600 text-center rounded-full h-4 w-4 text-white font-semibold'>
                            0
                        </div> 
                </div>
                    <div>
                        <img src={Avatar} alt="avatar" className='w-10 h-10' />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;