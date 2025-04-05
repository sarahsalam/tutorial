'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function Test () {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        date: "",
        password: "",
        address:""
    });

    const router = useRouter()
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });   
    }





    const changeName = () => {
        setFormData({...formData, name: 'Yahya'});
    }

    const resetName = () => {
        setFormData({...formData, name:"Saraaa"})
    }

    return (<>

    <h1 className = "text-2xl font-bold text-gray-800 text-center text-decoration-style: double mb-4">This is {formData.name}</h1>
    <div className="flex-row">
      <button className= "px-4 py-2 bg-blue-900 text-white font-semibold rounded"
    onClick={changeName}>Change Name</button>
      <button className="px-4 py-2 bg-pink-900 m-3 text-white font-semibold rounded"
    onClick={resetName}>Reset Name</button>
    </div>

    <div>
        <label> Enter name: </label>
        <input name="name" className="px-3 py-2 border border-gray-300 rounded m-2" type="text" value={formData.name} onChange={handleChange} />
    </div>

    <div>
        <label> Enter email: </label>
        <div className = "text-sm text-gray-800 text-center">{formData.email}</div>
        <input name="email" className="px-3 py-2 border border-gray-300 rounded m-3" type="email" value={formData.email} onChange={handleChange}/>
    </div>

    <div>
        <label>Enter date: </label>
        <div className = "text-sm  text-gray-800 text-center">{formData.date}</div>
        <input name="date" className="px-3 py-2 border border-gray-300 rounded m-2 " type="date" value={formData.date} onChange={handleChange}/>
    </div>

    <button className="px-4 py-2 bg-red-900 text-white font-semibold rounded m-3" onClick={()=>{router.push('/food');}} >Food</button>
    <Link href="/food" className="px-4 py-2 bg-green-900 text-white font-semibold rounded m-3">Go to Food</Link>
    
    </>

    )}
