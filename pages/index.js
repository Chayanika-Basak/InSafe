import Image from 'next/image'
import { Inter } from 'next/font/google'
import MyLayout from './myLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <MyLayout pageName="home">
    <div>
    <div className="bg-mainBackground relative bg-white min-w-full h-[832px] overflow-hidden text-left text-8xl text-black font-inter">
      {/* <div className="absolute top-[518px] left-[529px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd6ff_35.94%,_rgba(255,_214,_255,_0))] w-[430px] h-[394px]" />
      <div className="absolute top-[-9px] left-[-76px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd6ff_35.94%,_rgba(255,_214,_255,_0))] w-[430px] h-[394px]" />
      <div className="absolute top-[73px] left-[733px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#ffd6ff_35.94%,_rgba(255,_214,_255,_0))] w-[430px] h-[395px]" />
      <div className="absolute top-[246px] left-[315px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#bde0fe,_rgba(189,_224,_254,_0))] w-[418px] h-[377px]" />
      <div className="absolute top-[452px] left-[-155px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#bde0fe,_rgba(189,_224,_254,_0))] w-[418px] h-[377px]" /> */}
      <div className="absolute top-[430px] left-[1011px] rounded-[50%] [background:radial-gradient(50%_50%_at_50%_50%,_#bde0fe,_rgba(189,_224,_254,_0))] w-[424px] h-[369px]" />
      <img 
        className="absolute top-[320px] left-[392px] w-[900px] h-[200px] object-cover"
        alt=""
        src="/images/beeline.png"
      />
      <b className="absolute top-[118px] left-[30px] text-45xl leading-[80px] inline-block text-center w-[622px] h-[134px]">
        <p className="m-0">Keep in Check Your</p>
      </b>
      <b className="absolute top-[168px] left-[30px] text-45xl leading-[80px] inline-block text-center w-[622px] h-[134px]">
        <p className="m-0">Intimate Hygiene</p>
      </b>
      <div className="absolute top-[100px] left-[165px] font-semibold inline-block w-[488px] h-[21px]">
        Feeling Discomfort? Find Here Why...
      </div>
      <div className="absolute top-[240px] left-[50px] leading-[35px] text-center inline-block w-[590px] h-[45px]">
        <p>Identify The Discomforts, Explore The Issues</p>
        <p> and Attain The Solutions</p>
      </div>
      
      {/* <div className="absolute top-[41px] left-[1028px] rounded-41xl bg-lightskyblue shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[166px] h-[49px]" /> */}
      {/* <div className="absolute top-[87px] left-[441px] rounded-41xl bg-lightpink w-[46px] h-1.5" /> */}
      <img
        className="absolute top-[67px] left-[540px] w-[65px] h-[81px] object-cover"
        alt="female Symbol"
        src="/images/femaleSymbol.png"
      />
      <img
        className="absolute top-[175px] left-[64px] w-[61px] h-[75px] object-cover"
        alt="male Symbol"
        src="/images/maleSymbol.png"
      />
    </div>
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
  )
}
