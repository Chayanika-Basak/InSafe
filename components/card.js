import React from "react";
// import { Link } from "react-router-dom";
import {AiFillStar} from 'react-icons/ai'
import { useRouter } from "next/router"

const Card = ({props}) => {
    const router = useRouter();
  return (
    <>
    {/* <Link to={`/restaurant/${props._id}`} className="w-full md:w-1/4 lg:w-1/4 m-1 p-1 my-6"> */}
            <div className="w-80 bg-white transition duration-400 ease-in-out rounded-xl border border-gray-300 hover:border-gray-300 hover:shadow-xl">
                <div className="flex w-full h-52 lg:h-56 relative">
                    <div className="absolute w-full flex items-end justify-between bg-black opacity-75 bottom-0 py-4">
                        <div className="flex items-center gap-2 items-start">
                                <span className="bg-coral-400 rounded text-md text-white px-1 ml-1">
                                    Brand: {`${props.brand}`}
                                </span>
                            
                            
                                <span className="bg-blue-600 rounded text-md text-white px-1 ml-1" >
                                    {props.isNew ? `New Item` : ``}
                                </span>
                            
                        </div>
                        <span className="bg-white text-md rounded mr-1 px-1">
                            {props.size.join(", ")}
                        </span>
                    </div>
                    <img src={props.photoURL}
                    alt="food"
                    className="w-full object-scale-down rounded-2xl"
                    />
                </div>
                    <div className="flex items-center justify-between my-2 px-2">
                        <h4 className="text-xl font-medium">{props.name}</h4>
                        {/* <span className="bg-green-700 text-white flex items-center rounded-lg text-sm px-1 gap-1">
                        {props.ReviewValue} <AiFillStar/></span> */}
                    </div>
                    <div className="flex itesm-center justify-between my-2 text-gray-500 px-2">
                        <h4 className="text-sm">{props.category.join(", ")}</h4>
                        <h4 className="text-sm">₹ {props.price}</h4>
                    </div>
                    <div className=' border-t border-t-gray-300 my-2'/>
                    <div className="flex items-center justify-center">
                        <div className="w-64"><p className="text-xs text-center text-gray-500">{props.description}</p></div>
                    </div>
                    <div className="flex items-center justify-center my-2">
                        <button className="bg-lightskyblue px-2 py-1 rounded-full" onClick={() => router.push(`/shop/${props.name}`)}>View</button>
                    </div>
                
            </div>
            {/* </Link> */}
    </>
  )
}

export default Card