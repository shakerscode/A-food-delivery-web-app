import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate()

    return (
        <div className='px-5  flex flex-col justify-center items-center h-[600px] w-full'>
        <h1 className='text-center text-3xl font-semibold text-gray-900 mb-3'>Log In Please</h1> 
        <div className='flex flex-col justify-between gap-2  w-96'> 
            <label>Email <span className='text-red-600'>*</span></label>
            <input
            placeholder='Enter your email' 
            className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="email" name="" id="" />
            <label>Password <span className='text-red-600'>*</span></label>
            <input
            placeholder='Enter your password' 
            className='pl-4  outline-none	 border-none w-full h-14 rounded-md text-gray-900' type="password" name="" id="" /> 
            <div className='flex justify-center items-center gap-2 text-sm text-gray-900'><p>Forget password?<span className="text-red-500 font-semibold underline ml-2">Reset please</span></p></div>
            <button className='bg-red-500 rounded-md px-3 py-2 mt-10 text-lg w-full text-white hover:bg-white hover:text-gray-900 border border-red-500'  type='submit'>Register</button>
            <p className="text-sm text-center">Don't have an account? <span onClick={()=> navigate('/register')} className="cursor-pointer text-red-500 font-bold shadow underline">Please Register here</span></p>
        </div>
  
</div>
    );
};

export default Login;