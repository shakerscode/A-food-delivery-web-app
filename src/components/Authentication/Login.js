
const Login = () => {

    return (
        <div className='px-5 py-3 flex flex-col justify-center items-center h-[600px]'>
        <h1 className='text-center text-3xl font-semibold text-gray-900  mb-3'>Log In Please</h1>
  
        <div className='flex flex-col justify-between gap-2 w-[60%]'> 
            <label>Email <span className='text-red-600'>*</span></label>
            <input
            placeholder='Enter your email' 
            className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="email" name="" id="" />
            <label>Password <span className='text-red-600'>*</span></label>
            <input
            placeholder='Enter your password' 
            className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="password" name="" id="" /> 
            <div className='flex justify-center items-center gap-2 text-sm text-gray-900'><p>Forget password?<span>Reset please.</span></p></div>
            <button className='bg-red-500 rounded-md px-3 py-2 mt-10 text-lg w-full text-white hover:bg-white hover:text-gray-900 border border-red-500'  type='submit'>Register</button>
        </div>
  
</div>
    );
};

export default Login;