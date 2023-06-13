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
            <div>
        <button onClick={googleSignup} className='px-6 py-1 rounded-full text-lg bg-[#a2d2ff] shadow-md'>Login</button>
      </div>
        <div className='bg-lightskyblue rounded-xl mx-64 px-16 my-2 py-3'>
            <br></br>
            <br></br>
            <h1 className='text-lg my-4 font-semibold text-center'>Sign Up</h1>
            <hr></hr>
            {successMsg&&<>
                <div className='success-msg'>{successMsg}</div>
                <br></br>
            </>}
            <form className='flex flex-col gap-3' onSubmit={handleSignup}>
                <label>Full Name</label>
                <input type="text" className='form-control' required
                onChange={(e)=>setName(e.target.value)} value={name}></input>
                <br></br>
                <label>Email</label>
                <input type="email" className='form-control' required
                 onChange={(e)=>setEmail(e.target.value)} value={email}></input>
                <br></br>
                <label>Password</label>
                <input type="password" className='form-control' required
                 onChange={(e)=>setPassword(e.target.value)} value={password}></input>
                <br></br>
                <div className='flex flex-col gap-4'>
                    <span>Already have an account?  Login
                    <a href="/login" className='link'> Here</a></span>
                    <button type="submit" className='bg-white rounded-full p-4'>SIGN UP</button>
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

export default Signup;