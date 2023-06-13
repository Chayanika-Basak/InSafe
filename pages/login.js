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
      <div className='bg-lightskyblue rounded-xl mx-64 px-16 my-2 py-3'>
            <br></br>
            <br></br>
            <h1 className='text-lg my-4 font-semibold text-center'>Login</h1>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='flex flex-col gap-3'
            onSubmit={handleLogin}>               
                <label>Email</label>
                <input type="email" className='form-control' required
                onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='flex flex-col gap-4'>
                    <span>Don't have an account?  SignUp
                    <a href="/signup" className='a'> Here</a></span>
                    <button type="submit" className='bg-white rounded-full p-4'>LOGIN</button>
                </div>
            </form>
            {errorMsg&&<>
                <br></br>
                <div className='error-msg'>{errorMsg}</div>                
            </>}
        </div>
    </MyLayout>
  )
}

export default Login