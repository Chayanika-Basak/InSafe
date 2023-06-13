import React from 'react'
import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth';
// import { Link } from "react-router-dom";
import {CgProfile} from "react-icons/cg";
import {FaOpencart} from "react-icons/fa";

const Navbar = ({pageName}) => {
  
  const [user, setuser] = useAuthState(auth);
  const active = `border-b border-b-4 rounded-md border-b-[#ffafcc] no-underline text-black text-lg px-1 py-2 hover:shadow-md`;
  const inactive = `no-underline text-black text-lg rounded-full p-2 hover:bg-[#ffafcc] hover:text-white hover:shadow-md`;
  return (
    <div className='flex items-center justify-evenly p-6'>
        <div className='text-xl w-2/5 flex items-center'>
          <img src="/images/logo.png" alt="logo" className='w-16'/>
          <h1 className='font-inter font-semibold'>InSafe</h1>
        </div>
        <div className='flex items-center justify-evenly w-3/5'>
        <a href="/" className={pageName == "home" ? active: inactive}>Home</a>
        <a href="/tips" className={pageName == "tips" ? active: inactive}>Tips</a>
        <a href="/shop" className={pageName == "shop" ? active: inactive}>Shop</a>
        <a href="/about" className={pageName == "about" ? active: inactive}>About Us</a>
        {
          user ? 
          <div className='w-10 h-10 dropdown'>
            {user.photoURL ? <img src={user.photoURL} alt="profile" className='rounded-full'/> : <CgProfile size={35}/>}
            <div class="dropdown-content">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#" onClick={() => auth.signOut()} className='border-t-2'>Logout</a>
            </div>
          </div>
          : <a href="/login"><button className='px-6 py-1 rounded-full text-lg bg-[#a2d2ff] shadow-md'>Login</button></a>
        } 
        <a href="/cart"><FaOpencart size={30}/></a>     
        </div>
    </div>
  )
}

export default Navbar