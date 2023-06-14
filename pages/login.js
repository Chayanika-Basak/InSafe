import React , {useState, useEffect} from 'react'
import MyLayout from './myLayout'
import {auth} from './firebase'
// import { redirect } from 'next/navigation'
// import {useAuthState} from 'react-firebase-hooks/auth';
// import { useAuth } from '../context/AuthContext'

import { useRouter } from "next/router"
// import {useHistory, Link} from 'react-router-dom'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const Login = () => {
  // const history = useHistory();
  const router = useRouter();

  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');

  const [errorMsg, setErrorMsg]=useState('');
  const [successMsg, setSuccessMsg]=useState('');
  
  const handleLogin=(e)=>{
      e.preventDefault();
      // console.log(email, password);
      signInWithEmailAndPassword(auth,email,password).then(()=>{
          setSuccessMsg('Login Successfull. You will now automatically get redirected to Home page');
          setEmail('');
          setPassword('');
          setErrorMsg('');
          setTimeout(()=>{
              setSuccessMsg('');
              router.push('/');
          },3000)
      }).catch(error=>setErrorMsg(error.message));
  }

  return (
    <MyLayout>
        <div className='bg-mainBackground min-h-screen flex items-center'>
      <div className='bg-white rounded-xl mx-64 px-16 w-96 shadow-xl'>
            <br></br>
            <br></br>
            <h1 className='text-lg my-4 font-semibold text-center'>Login</h1>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='flex flex-col'
            onSubmit={handleLogin}>               
                <label className='mt-4 mb-2'>Email</label>
                <input type="email" className='border rounded-full px-2 py-1' required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label className='mb-2'>Password</label>
                <input type="password" className='border rounded-full px-2 py-1' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='flex flex-col gap-4'>
                    <span>Don't have an account?</span>
                    <a href="/signup" className='font-semibold underline'>Signup Here</a>
                    <button type="submit" className='bg-lightblue rounded-full p-2 mx-6 mb-8'>LOGIN</button>
                </div>
            </form>
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
        <div className='w-56'>
            <img src="/images/login.png" alt="login"/>
        </div>
        </div>
    </MyLayout>
  )
}

export default Login