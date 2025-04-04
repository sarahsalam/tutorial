'use client';

import axios from "axios"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

export const FoodImage = ()=>{
    const [image, setImage] = useState<string>("/globe.svg")

    const fetchImage = async () => {
        const response = await axios.get("https://foodish-api.com/api");
        console.log(response);
        setImage(response.data.image);

    }

    useEffect(()=>{
        fetchImage()
        const interval = setInterval(() => {
            fetchImage()
        }, 5000);
        return () => clearInterval(interval); // Cleanup the interval on component unmount

    },[])

    return(
        <>
        <div className="flex flex-col gap-10 justify-center items-center bg-gray-100">
            <Link href="/" className="flex text-gray-800 font-semibold text-lg hover:bg-gray-600">Back</Link>
            <Image className="flex p-10" fill src={image}  alt="jhdsa"/>    
            
        </div>        
        </>
    )
}