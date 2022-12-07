import React, { useState } from 'react'
import useAuthContext from './useAuthContext';
const singUpUrl = "https://test.nexisltd.com/signup";
// const singUpUrl = "http://localhost:3001/api/register";

const useSignUp = () => {
    const [isError , setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();

    const signup = async (first_name, last_name, phone_number, email, password) => {
        setIsLoading(true);
        setIsError(null);

        const response = await fetch(singUpUrl,{
            method: "POST",
            headers: {"content-type" : "application/json"},
            body: JSON.stringify({first_name,last_name,phone_number,email,password})

        });
        const useData = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setIsError(useData.error);
            throw Error('Someting went wrong with the url');
        }
        if(response.ok){
            localStorage.setItem("useData", JSON.stringify(useData))

            // dispatch({type: "LOGIN", payload: useData})
            setIsLoading(false);
        }

    }
  return {isError,isLoading,signup};
}

export default useSignUp;