import React, { useState } from 'react'
import useAuthContext from './useAuthContext';
const loginUrl = "https://test.nexisltd.com/login";
// const singUpUrl = "http://localhost:3001/api/register";

const useLogin = () => {
    const [isError , setIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const {dispatch} = useAuthContext();
    const currUser = JSON.parse(localStorage.getItem("useData"));
    const existUser = localStorage.getItem("useData");

    const login = async (email, password) => {
        setIsLoading(true);
        setIsError(null);

        if(!existUser){
            setIsError("You must be logged in");
            return;
        }
        const response = await fetch(loginUrl,{
            method: "POST",
            headers: {
                "content-type" : "application/json",
                "Authorization" : `Bearer ${currUser.access_token}`
            },
            body: JSON.stringify({email,password})

        });
        const useData = await response.json();

        if(!response.ok){
            setIsLoading(false);
            setIsError(useData.error);
            throw Error('Someting went wrong with the url');
        }
        if(response.ok){
            localStorage.setItem("useData", JSON.stringify(useData))

            dispatch({type: "LOGIN", payload: useData})
            setIsLoading(false);
        }

    }
  return {isError,isLoading,login};
}

export default useLogin;