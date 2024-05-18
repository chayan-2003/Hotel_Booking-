import React from 'react'
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    < div  className="navbar">
        <div className="navContainer flex justify-between items-center text-yellow-50 ">
          <Link to="/" >
        <div className="logo pt-6 pl-16 font-mono ml-1 text-lg "> Chayan Booking</div>
        </Link>
        < div className=" flex classItems pt-4 px-32">
            <button className="  bg-white  text-black mx-4 py-1  rounded font-semibold px-4">Register</button>
            <button className="bg-white navButton  text-black py-1 rounded font-semibold px-4">Login</button>
        </div>
        </div>
        </div>
  )
}

export default Navbar