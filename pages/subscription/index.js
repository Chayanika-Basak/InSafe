import React , {useState, useEffect} from 'react'
import useFetchProducts from '../../hooks/fetchData';
import MyLayout from '../myLayout';
import Card from '@/components/card';
import {db, auth} from '../firebase';
import {increment, collection, addDoc, updateDoc, doc, getDocs, query, where} from 'firebase/firestore';

const Subscription = () => {
  
  return (
    <MyLayout pageName='subscription'>
      <div className="relative [background:linear-gradient(180deg,_#fff_44.79%,_#ffd6ff_83.33%)] w-full h-[640px] overflow-hidden text-left text-8xl text-black font-inter">
      {/* <div className="absolute top-[30px] left-[1150px] rounded-41xl bg-lightskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[120px] h-[38px]" /> */}
      {/* <form action="loggedin"><button type="submit" className="absolute top-[38px] left-[1190px]">Back</button></form> */}
      <div className="absolute top-[130px] left-[195px] rounded-tl-41xl rounded-tr-none rounded-br-41xl rounded-bl-none bg-white shadow-[4px_4px_4px_5px_rgba(0,_0,_0,_0.25)] w-[240px] h-[380px]" />
      <div className="absolute top-[150px] left-[290px] font-semibold">Basic</div>
      <div className="absolute top-[220px] left-[260px] text-center text-21xl">
        <p className="m-0">55/- Rs</p>
        <p className="m-0 text-8xl">
          <span>per month</span>
          <span className="text-21xl">{` `}</span>
        </p>
      </div>
      <div className="absolute top-[340px] left-[220px] text-7xl text-center inline-block w-[175px] h-[68px]">
        get benefits to chat and video call
      </div>
      <div className="absolute top-[440px] left-[253px] rounded-41xl bg-lightskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[120px] h-[38px]" />
      <div className="absolute top-[450px] left-[275px]">Buy Now</div>
      <div className="absolute top-[130px] left-[555px] rounded-tl-41xl rounded-tr-none rounded-br-41xl rounded-bl-none bg-white shadow-[4px_4px_4px_5px_rgba(0,_0,_0,_0.25)] w-[240px] h-[380px]" />
      <div className="absolute top-[150px] left-[655px] font-semibold">Basic</div>
      <div className="absolute top-[220px] left-[615px] text-center text-21xl">
        <p className="m-0">100/- Rs</p>
        <p className="m-0 text-8xl">
          <span>2 months</span>
          <span className="text-21xl">{` `}</span>
        </p>
      </div>
      <div className="absolute top-[340px] left-[585px] text-7xl text-center inline-block w-[175px] h-[68px]">
        get benefits to chat and video call
      </div>
      <div className="absolute top-[440px] left-[610px] rounded-41xl bg-lightskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[120px] h-[38px]" />
      <div className="absolute top-[450px] left-[630px]">Buy Now</div>
      <div className="absolute top-[130px] left-[920px] rounded-tl-41xl rounded-tr-none rounded-br-41xl rounded-bl-none bg-white shadow-[4px_4px_4px_5px_rgba(0,_0,_0,_0.25)] w-[240px] h-[380px]" />
      <div className="absolute top-[150px] left-[1015px] font-semibold">Basic</div>
      <div className="absolute top-[220px] left-[975px] text-center text-21xl">
        <p className="m-0">175/- Rs</p>
        <p className="m-0 text-8xl">
          <span>3 months</span>
          <span className="text-21xl">{` `}</span>
        </p>
      </div>
      <div className="absolute top-[340px] left-[950px] text-7xl text-center inline-block w-[175px] h-[68px]">
        get benefits to chat and video call
      </div>
      <div className="absolute top-[440px] left-[980px] rounded-41xl bg-lightskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[120px] h-[38px]" />
      <div className="absolute top-[450px] left-[1000px]">Buy Now</div>
      {/* <img className="absolute top-[25px] left-[48px]" alt="" src="/images/logo.png"/> */}
    </div>
    </MyLayout>
  )
}

export default Subscription