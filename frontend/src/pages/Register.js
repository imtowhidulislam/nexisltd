import React, { useEffect, useState } from 'react'
import Signup from '../components/signup';
import Login from "../components/Login";
import Illutration from "../assets/register.svg";

const Register = () => {
    const [showForm, setShowForm] = useState(true);

    const toggleForm = () => {
        setShowForm(!showForm);
    }
    useEffect(() => {
        console.log(showForm);
    },[showForm])
  return (
    <div className='flex items-center justify-center p-16 gap-8 '>
        <div className='max-content'>
            <img src={Illutration} alt="" />
        </div>
    <div>
    <div className='bg-gray-50 p-8 rounded-lg drop-shadow-lg animateUp'>
        { showForm ?  <Signup /> : <Login/> }
        <div>
            {showForm ? <p className='text-center capitalize text-gray-400'>Don't have any account? <span className='uppercase font-bold underline cursor-pointer text-blue-400 hover:text-blue-500 transition-colors' type="button" onClick={toggleForm} >signup here</span></p> : <p className='text-center capitalize text-gray-400'>already have an account? <span className='uppercase font-bold underline cursor-pointer text-blue-400 hover:text-blue-500 transition-colors' type="button" onClick={toggleForm} >login here</span></p>}
            
        </div>
    </div>
</div>
</div>
  )
}

export default Register