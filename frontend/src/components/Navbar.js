import React from 'react'
import {Link, Outlet} from "react-router-dom";
import { FaBars, FaCross } from "react-icons/fa";
import { GiCrossedBones } from "react-icons/gi";
import { HiBars3CenterLeft } from "react-icons/hi";


const Navbar = () => {
  return (
    <>
        <div className='bg-blue-700 text-gray-100 py-4 uppercase'>
            <nav className="">
                <ul className="flex items-center justify-center gap-4">
                <li className="">
                    <Link className="" to="/">
                    Register
                    </Link>
                </li>
                <li className="">
                    <Link className="" to="/attendence">
                    Attendence
                    </Link>
                </li>
                <div className="">
                    {/* <li className="nav_list">
                        <button
                        onClick={}
                        className="link logout_btn desk_logout"
                        >
                        Logout
                        </button>
                    </li> */}
                    <div className="flex items-center justify-center gap-4">
                        <li className="">
                            <Link className="" to="/signup">
                                Signup
                            </Link>
                        </li>
                        <li className="">
                            <Link className="" to="/login">
                                Login
                            </Link>
                        </li>
                        </div>
                    </div>
                </ul>
            </nav>
            <Outlet />
        </div>
    </>
  )
}

export default Navbar