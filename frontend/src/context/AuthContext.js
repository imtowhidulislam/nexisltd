import React, { createContext, useEffect, useReducer, useState } from 'react'
export const AuthContext = createContext();

export const authReducer = (state,action) => {
    switch (action.type) {
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return {user : null}
        default :
            return state
    }
}

const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer,{user:null})

    useEffect(() => {
        const UserExist = JSON.parse(localStorage.getItem("useData"));
        if(UserExist) dispatch({type:"LOGIN", payload:UserExist});
    },[])
  return (
    <AuthContext.Provider value={{...state,dispatch}}>
        {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider;
