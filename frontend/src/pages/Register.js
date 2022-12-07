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
    <div className='flex items-center justify-center my-20 md:px-12'>
        <div className='bg-cyan-500 w-full rounded-xl p-4 drop-shadow-2xl max-w-6xl sm:grid grid-cols-grid-col place-items-center gap-4 px-4 py-8 md:p-8 md:gap-12'>
            <div className='max-content mb-8 sm:mb-0'>
                <img src={Illutration} alt="" />
            </div>
            <div className='bg-gray-50 p-8 rounded-lg drop-shadow-lg animateUp'>
                { showForm ?  <Signup /> : <Login/> }
                <div>
                    {!showForm ? <p className='text-center capitalize text-gray-400'>Don't have any account? <span className='uppercase font-bold underline cursor-pointer text-blue-400 hover:text-blue-500 transition-colors' type="button" onClick={toggleForm} >signup here</span></p> : <p className='text-center capitalize text-gray-400'>already have an account? <span className='uppercase font-bold underline cursor-pointer text-blue-400 hover:text-blue-500 transition-colors' type="button" onClick={toggleForm} >login here</span></p>}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register