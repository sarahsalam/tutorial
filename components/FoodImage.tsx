'use client';

import axios from "axios"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"

export const FoodImage = () => {
    const [image, setImage] = useState<string>("/globe.svg")
    const [counter, setCounter] = useState<number>(0)

    const fetchImage = async () => {
        try{
        const response = await axios.get("https://foodish-api.com/api");
        console.log(response);
        setImage(response.data.image);
        }catch (error) {
            console.error("Error fetching image:", error);
        }



    }

    useEffect(() => {
        fetchImage()
        
    }, [counter])

    return (
        <>
            <div className="flex flex-col gap-10 justify-center items-center bg-gray-100">
                <Link href="/" className="flex p-3 text-gray-800 font-semibold text-lg hover:bg-gray-600 hover:text-white">Back</Link>
                <Image className="flex p-10" width={300} height={300} src={image} alt="jhdsa" />
                <p className="font-bold text-lg">{counter}</p>
                <button className="px-4 py-2 bg-blue-900 text-white font-semibold rounded" onClick={()=> setCounter(counter+1)}>Fetch Image</button>

            </div>
        </>
    )
}