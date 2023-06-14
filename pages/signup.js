import React,{useState} from 'react'
import {auth,db} from './firebase'
import { setDoc, doc, collection, addDoc} from 'firebase/firestore'
import { useRouter } from "next/router"
import {createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import MyLayout from './myLayout'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {useAuthState} from 'react-firebase-hooks/auth';

const Signup = () => {
    const googleAuth = new GoogleAuthProvider();

    const router = useRouter();

    const [name, setName]=useState('');
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');

    const [errorMsg, setErrorMsg]=useState('');
    const [successMsg, setSuccessMsg]=useState('');


    const handleSignup=(e)=>{
        e.preventDefault();
        // console.log(name, email, password);
        createUserWithEmailAndPassword(auth,email,password).then((credentials)=>{
            console.log(credentials);
            setDoc(doc(db,'users',credentials.user.uid),{
                name: name,
                email: email,
                coins: 0
            }).then(()=>{
                setSuccessMsg('Signup Successfull. You will now automatically get redirected to Login');
                addDoc(collection(db,'cart'),{userID: credentials.user.uid});
                setName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    router.push('/login');
                },3000)
            }).catch(error=>setErrorMsg(error.message));
        }).catch((error)=>{
            setErrorMsg(error.message)
        })
    }

    const googleSignup = async () => {
        signInWithPopup(auth, googleAuth).then((credentials)=>{
            console.log(credentials);
            setDoc(doc(db,'users',credentials.user.uid),{
                name: credentials.user.displayName,
                email: credentials.user.email,
                coins: 0
            }).then(()=>{
                setSuccessMsg('Signup Successfull. You will now automatically get redirected to Home Screen');
                addDoc(collection(db,'cart'),{userID: credentials.user.uid});
                setName('');
                setEmail('');
                setPassword('');
                setErrorMsg('');
                setTimeout(()=>{
                    setSuccessMsg('');
                    router.push('/');
                },3000)
            }).catch(error=>setErrorMsg(error.message));
        }).catch((error)=>{
            setErrorMsg(error.message)
        })
      };

    return (
        <MyLayout>
            <div className='bg-mainBackground min-h-screen flex items-center'>
        <div className='bg-white rounded-xl mx-64 px-16 w-96 shadow-xl'>
            <br></br>
            <br></br>
            <h1 className='text-lg my-4 font-semibold text-center'>Sign Up</h1>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='flex flex-col' onSubmit={handleSignup}>
                <label className='mt-4 mb-2'>Full Name</label>
                <input type="text" className='border rounded-full px-2 py-1' required
                onChange={(e)=>setName(e.target.value)} value={name}></input>
                <br></br>
                <label className='mb-2'>Email</label>
                <input type="email" className='border rounded-full px-2 py-1' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label className='mb-2'>Password</label>
                <input type="password" className='border rounded-full px-2 py-1' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='flex flex-col gap-4'>
                    <span>Already have an account?</span>
                    <a href="/login" className='font-semibold underline'>Login Here</a>
                    <button type="submit" className='bg-lightblue rounded-full p-2 mx-6 mb-4'>SIGN UP</button>
                    <button onClick={googleSignup} className='bg-lightblue rounded-full p-2 mx-6 mb-8'>SignIn with Google</button>
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

export default Signup;