import React, { useState } from 'react'
const LoginUrl = "http://localhost:3001/api/user/login/";

const Login = () => {
    const [user, setUser] = useState({email:"",password:"" });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(user.email && user.password){
            console.log(user.email, user.password);
            user.email = "";
            user.password = "";
        }
        else{
            console.log("Please fill all the fields");
        }
    }
  return (
    <form action="" onSubmit={handleSubmit} className="max-w-lg" >
        <h2 className='text-center text-2xl font-bold mb-12 capitalize'>Log in Form</h2>
        <div>
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="email" name='email' value={user.email} placeholder="write email" onChange={handleChange} />
            <input className='w-full p-2 bg-transparent outline-none border-x-0 border-t-0 border-b-2 border-gray-300 mb-4 placeholder:capitalize' type="password" name='password' value={user.password} placeholder="write password" onChange={handleChange} />
        </div>
        <div className='flex items-center justify-center my-4'>
            <button className='bg-blue-500 drop-shadow-lg py-2 px-8 pointer rounded-full capitalize text-gray-50 font-bold hover:bg-blue-300 hover:text-gray-800 transition-all' type='button' onClick={handleSubmit}>Login</button>
        </div>
    </form>
  )
}

export default Login