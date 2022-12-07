import React, { useState } from 'react'
import Illutration from "../assets/register.svg";
import useSignUp from '../hooks/useSignUp';
const RegisterUrl = "http://localhost:3001/api/user/register/";

const Signup = () => {
    const [user, setUser] = useState({first_name:"", last_name:"", phone_number:"",email:"",password:"" });
    const {isError, isLoading, signup} = useSignUp();

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
        console.log("%s : %s", name, value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        signup(user.first_name, user.last_name, user.phone_number, user.email , user.password)   
        console.log(user.first_name, user.last_name,user.phone_number, user.email, user.password);
        user.first_name = "";
        user.last_name = "";
        user.phone_number = "";
        user.email = "";
        user.password = "";
    }
  return (
    <form action="" onSubmit={handleSubmit} className="max-w-lg" >
        <h2 className='text-center text-2xl font-bold mb-12'>SignUp Form</h2>
        <div>
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="text" name='first_name' value={user.first_name} placeholder="Write First name" onChange={handleChange} />
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="text" name='last_name' value={user.last_name} placeholder="write last name" onChange={handleChange} />
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="text" name='phone_number' value={user.phone_number} placeholder="write phone number" onChange={handleChange} />
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="email" name='email' value={user.email} placeholder="write email" onChange={handleChange} />
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="password" name='password' value={user.password} placeholder="write password" onChange={handleChange} />
        </div>
        {isError && <p className='capitalize text-red-400'>{isError}</p>}
        <div className='flex items-center justify-center my-4'>
            <button disabled={isLoading} className='bg-blue-500 py-2 drop-shadow-lg px-8 pointer rounded-full capitalize text-gray-50 font-bold hover:bg-blue-300 hover:text-gray-800 transition-all' type='button' onClick={handleSubmit}>Sign Up</button>
        </div>
    </form>
  )
}

export default Signup