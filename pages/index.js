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
    
    </div>
    </MyLayout>
  )
}
