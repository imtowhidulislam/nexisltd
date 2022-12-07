import React from 'react'
import useAuthContext from './useAuthContext'

const useLogOut = () => {
const {dispatch} = useAuthContext();
  const logOut = () => {
    localStorage.removeItem("useData")

    dispatch({type: "LOGOUT"})
  }
  return {logOut};
}

export default useLogOut