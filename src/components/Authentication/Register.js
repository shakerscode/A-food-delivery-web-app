import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Register = () => {
    const [checkStatus, setCheckStatus] = useState(false);
    
    return (
        <div className='px-5 py-3 flex flex-col justify-center items-center h-[600px] w-full'>
                <h1 className='text-center text-3xl font-semibold text-gray-900 my-5 mb-3'>Register Please</h1>
          
                <div className='flex flex-col justify-between gap-2'>
                    <label>Name <span className='text-red-600'>*</span></label>
                    <input
                    placeholder='Enter your name' 
                    className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="text" />
                    <label>Email <span className='text-red-600'>*</span></label>
                    <input
                    placeholder='Enter your email' 
                    className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="email" name="" id="" />
                    <label>Password <span className='text-red-600'>*</span></label>
                    <input
                    placeholder='Enter your password' 
                    className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="password" name="" id="" />
                    <label>Confirm Password <span className='text-red-600'>*</span></label>
                    <input
                    placeholder='Confirm your password' 
                    className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="password" name="" id="" />

                    <div className='flex justify-center items-center gap-2 text-sm text-gray-900'><input onClick={(e) => setCheckStatus(e.target.checked)} type="checkbox" name="" id="" /><p>Accept our privacy and policy. Read our <a href="/">Privacy</a> & <a href="/">policy</a></p></div>
                    <button disabled={!checkStatus} className='bg-red-500 rounded-md px-3 py-2 mt-10 text-lg w-full text-white hover:bg-white hover:text-gray-900 border border-red-500'  type='submit'>Register</button>
                    <p className="text-sm text-center">Already have an account? <span onClick={()=> Navigate('/login')} className="cursor-pointer text-red-500 font-bold shadow underline">Please Login here</span></p>

                </div>
          
        </div>
    );
};

export default Register;