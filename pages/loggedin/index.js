import React , {useState, useEffect} from 'react'
import useFetchProducts from '../../hooks/fetchData';
import MyLayout from '../myLayout';
import Card from '@/components/card';
import {db, auth} from '../firebase';
import {increment, collection, addDoc, updateDoc, doc, getDocs, query, where} from 'firebase/firestore';

const LoggedIn = () => {
  
  return (
    <MyLayout pageName='loggedin'>
        {/* <div className="relative bg-white w-full h-[641px] overflow-hidden text-left text-8xl text-black font-inter"> */}
        <div className="bg-mainBackground relative bg-white min-w-full h-[832px] overflow-hidden text-left text-8xl text-black font-inter">
       {/* <div className="absolute top-[546px] left-[460px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd6ff_35.94%,_rgba(255,_214,_255,_0))] w-[300px] h-[300px]" />
       <div className="absolute top-[49px] left-[-152px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd6ff_35.94%,_rgba(255,_214,_255,_0))] w-[300px] h-[300px]" />
       <div className="absolute top-[66px] left-[860px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd6ff_35.94%,_rgba(255,_214,_255,_0))] w-[300px] h-[300px]" />
       <div className="absolute top-[190px] left-[350px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#bde0fe,_rgba(189,_224,_254,_0))] w-[300px] h-[300px]" />
       <div className="absolute top-[541px] left-[-145px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#bde0fe,_rgba(189,_224,_254,_0))] w-[300px] h-[300px]" />
       <div className="absolute top-[455px] left-[922px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#bde0fe,_rgba(189,_224,_254,_0))] w-[300px] h-[300px]" /> */}
      
      {/* <div className="absolute top-[40px] left-[660px] font-medium inline-block w-[82px] h-[30px]">
        Home
      </div> */}
      
      <div className="absolute top-[60px] left-[520px] font-semibold inline-block w-[488px] h-[31px]">
        Feeling Discomfort? Find Here Why...
      </div>
      {/* <div className="absolute top-[40px] left-[850px] inline-block w-14 h-[27px]">
        Tips
      </div> */}
      <div className="absolute top-[230px] left-[90px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[320px] h-[210px]" />
      <div className="absolute top-[475px] left-[170px] rounded-41xl bg-lightpink shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[150px] h-[38px]" />
      <div className="absolute top-[480px] left-[180px] inline-block w-[204px] h-[34px]">
        Reward points
      </div>
      <div className="absolute top-[350px] left-[210px] inline-block w-[130px] h-[34px]">
        14 Points
      </div>
      <div className="absolute top-[390px] left-[90px] text-2xl text-center inline-block w-[312px] h-[22px]">
        Get a free chance to video call
      </div>
      <div className="absolute top-[230px] left-[520px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[320px] h-[210px]" />
      <div className="absolute top-[475px] left-[630px] rounded-41xl bg-lightpink shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[100px] h-[38px]" />
      <div className="absolute top-[480px] left-[660px] text-center">Chat</div>
      <div className="absolute top-[350px] left-[650px]">Inbox 6</div>
      <div className="absolute top-[390px] left-[520px] text-2xl text-center inline-block w-[312px] h-[22px]">
        Discuss with experts
      </div>
      <div className="absolute top-[230px] left-[950px] bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[320px] h-[210px]" />
      <div className="absolute top-[475px] left-[1050px] rounded-41xl bg-lightpink shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[130px] h-[38px]" />
      <div className="absolute top-[480px] left-[1070px] text-center">
        Video Call
      </div>
      <div className="absolute top-[350px] left-[1080px] inline-block w-[130px] h-[34px]">
        1 Missed
      </div>
      <div className="absolute top-[390px] left-[960px] text-2xl text-center inline-block w-[312px] h-[22px]">
        Charge - 300 per call
      </div>
      <img
        className="absolute top-[250px] left-[195px] w-[101px] h-[92px] object-cover"
        alt=""
        src="/images/reward.png"
      />
      {/* <div className="absolute top-[40px] left-[950px] inline-block w-[69px] h-[27px]">
        Shop
      </div> */}
      {/* <div className="absolute top-[40px] left-[1060px] inline-block w-[124px] h-[22px]">
        About Us
      </div> */}
      
      <img
        className="absolute top-[50px] left-[880px] w-[65px] h-[81px] object-cover"
        alt=""
        src="/images/femaleSymbol.png"
      />
      <img
        className="absolute top-[50px] left-[420px] w-[61px] h-[75px] object-cover"
        alt=""
        src="/images/maleSymbol.png"
      />

      {/* porfile circle */}
      {/* <div className="absolute top-[24px] left-[1210px] rounded-[50%] bg-lightskyblue w-[60px] h-[60px]" /> */}
      <img
        className="absolute h-[7.69%] w-[5%] top-[3%] right-[8.52%] bottom-[87.74%] left-[92.54%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-person.svg"
      />

      <div className="absolute top-[120px] left-[545px] rounded-41xl bg-lightskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[300px] h-[46px]" />
      <form action="subscription">
      <button type="submit" className="absolute top-[130px] left-[570px]">
        View My Subscription Plan
      </button>
      </form>
      <img
        className="absolute h-[9%] w-[6.5%] top-[47%] right-[46.78%] bottom-[37.16%] left-[47%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-message.svg"
      />
      <img
        className="absolute h-[6.25%] w-[6.5%] top-[47%] right-[13.74%] bottom-[38.58%] left-[79.77%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/-icon-video.svg"
      />
     
    </div>
    <div>
    <div className="bg-mainBackground relative bg-white w-full h-[832px] overflow-hidden text-left text-base text-black font-inter">
      <div className="absolute top-[85px] left-[88px] rounded-56xl bg-aliceblue [backdrop-filter:blur(50px)] w-[1102px] h-[695px]" />
      <div className="absolute top-[364px] left-[50px] rounded-t-31xl rounded-b-none bg-lightblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[1140px] h-[440px] border-[6px] border-solid border-white" />
      <div className="absolute top-[388px] left-[77px] rounded-39xl bg-white w-[343px] h-[392px]" />
      <img
        className="absolute top-[698px] left-[142px] rounded-41xl w-[197px] h-[69px]"
        alt=""
        src="/below-1.svg"
      />
      <div className="absolute top-[719px] left-[172px]">
        Click to view More
      </div>
      <div className="absolute top-[631px] left-[122px] font-light text-center inline-block w-[249px]">
        Embrace the flow, break the silence: Empowering menstrual awareness for
        all
      </div>
      <div className="absolute top-[408px] left-[122px] text-7xl font-medium">
        Girls Hygiene Guide
      </div>
      <img
        className="absolute top-[388px] left-[444px] rounded-39xl w-[343px] h-[392px]"
        alt=""
        src="/box-2.svg"
      />
      <img
        className="absolute top-[698px] left-[511px] rounded-41xl w-[197px] h-[69px]"
        alt=""
        src="/below-1.svg"
      />
      <div className="absolute top-[719px] left-[539px]">
        Click to view More
      </div>
      <div className="absolute top-[627px] left-[481px] font-light text-center inline-block w-[249px]">
        Navigating Adolescence: A Guide to Thriving Through the Teenage Years
      </div>
      <img
        className="absolute top-[447px] left-[501px] w-[211px] h-[158px] object-cover"
        alt=""
        src="/img3@2x.png"
      />
      <div className="absolute top-[405px] left-[501px] text-7xl font-medium inline-block w-[229px] h-[31px]">
        <p className="m-0">New Adolescent</p>
      </div>
      <div className="absolute top-[388px] left-[813px] rounded-39xl bg-white w-[343px] h-[392px]" />
      <img
        className="absolute top-[698px] left-[892px] rounded-41xl w-[197px] h-[69px]"
        alt=""
        src="/below-1.svg"
      />
      <div className="absolute top-[719px] left-[919px]">
        Click to view More
      </div>
      <div className="absolute top-[620px] left-[862px] font-light text-center inline-block w-[249px]">
        Strong, Clean, and Confident: Boys who prioritize hygiene inspire
        greatness.
      </div>
      <img
        className="absolute top-[453px] left-[866px] w-[211px] h-[158px] object-cover"
        alt=""
        src="/img4@2x.png"
      />
      <div className="absolute top-[406px] left-[865px] text-7xl font-medium inline-block w-[291px] h-[31px]">
        Boys Hygiene Guide
      </div>
      <img
        className="absolute top-[104px] left-[50px] rounded-t-23xl rounded-b-none w-[1140px] h-[251px] object-cover"
        alt=""
        src="/img1@2x.png"
      />
      <div className="absolute top-[173px] left-[117px] text-[32px] tracking-[0.13em] font-antic inline-block w-[590px] h-[143px]">
        Knowledge is power, but awareness is the key that unlocks its potential
      </div>
      <img
        className="absolute top-[456px] left-[138px] rounded-7xl w-[211px] h-[158px] object-cover"
        alt=""
        src="/img2@2x.png"
      />
    </div>
    </div>
    </MyLayout>

    );
};

export default LoggedIn