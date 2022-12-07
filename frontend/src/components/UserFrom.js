import { useEffect,useState } from 'react';
import React from 'react'
const testUrl = "https://test.nexisltd.com/test";

const UserForm = () => {
    const currUser = JSON.parse(localStorage.getItem("useData"));
    const [testData, setTestData] = useState([]);

    const fetchTestData = async () => {
        const res = await fetch(testUrl,{
            // method: "GET",
            headers: {
                'Authorization':`Bearer ${currUser.access_token}`
            }
        })
        const resData = await res.json();
        const userArray = Object.values(resData);
        console.log(userArray);
        setTestData(userArray);
    }
    useEffect(() => {
        fetchTestData();
        console.log(testData);
    },[])
  return (
    <div className='w-full max-w-7xl px-16'>
        <div className='grid place-items-center mb-8'> 
            <h2 className='capitalize w-max text-2xl font-bold bg-orange-500 p-4 rounded-xl text-white'>Attendence information</h2>
        </div>
        <div className=''>
            <div className='flex items-center justify-between mb-6'>
                <h3 className='capitalize font-bold'>Date</h3>
                <h3 className='capitalize font-bold'>Employee Name</h3>
                <h3 className='capitalize font-bold'>Status</h3>
            </div>
        {
            testData.map((test)=> {
                const {id, name, attendance} = test;
                const attandance1 = Object.values(attendance);
                const dates = Object.keys(attendance);

                return (
                    <div key={id} className='grid grid-cols-grid-col1 py-2 mb-4 border-b-4 rounded-lg border-transparent hover:border-orange-500'>
                        <p>{dates[1]}</p>
                        <p className='text-center'>{name}</p>
                        <p className='text-right'>{attandance1[9].status}</p>
                    </div>
                )
            })
        }
        </div>
    </div>
  )
}

export default UserForm