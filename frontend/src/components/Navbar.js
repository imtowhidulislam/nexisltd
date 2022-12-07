import React, { useRef, useState,useEffect } from 'react'
import {Link, Outlet} from "react-router-dom";
import { FaBars, FaCross } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import { HiBars3CenterLeft } from "react-icons/hi";
import Logo from "../assets/logo.png"
import useLogOut from '../hooks/useLogOut';

const Navbar = () => {
    const {logOut} = useLogOut();
    const currUser = localStorage.getItem("useData");
    const [width,setWidth] = useState(0);
    const navBar = useRef(null);
     // !! Logout Button functionality:::
  const logoutUser = (e) => {
    e.preventDefault();
    logOut();
  };

  useEffect(() => {
    const height = navBar.current.getBoundingClientRect().height;
    console.log(height);
  }, []);
  useEffect(() => {
    const calcSize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", calcSize);

    return () => {
      window.removeEventListener("resize", calcSize);
    };
  }, [width]);
    
  return (
    <>
        <div className='bg-blue-700 w-full text-gray-100 py-4 uppercase px-4' ref={navBar}>
            <nav className="">
                <ul className="flex items-center justify-between gap-4">
                    <div className='w-16'><img src={Logo} alt="logo" /></div>
                    <div className='flex gap-4'>
                        {
                            currUser ? (
                                <li className="">
                                    <button
                                    onClick={logoutUser}
                                    className="uppercase"
                                    >
                                    Logout
                                    </button>
                                </li>
                            ) : (
                                <li className="">
                                    <Link className="" to="/">
                                        Register
                                    </Link>
                                </li>
                            )
                        }
                        
                        <li className="">
                            <Link className="" to="/attendence">
                            Attendence
                            </Link>
                        </li>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </div>
    </>
  )
}

export default Navbar