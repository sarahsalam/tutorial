'use client'

import { useState } from "react"

export default function Test () {
    const [name, setName] = useState('Sara');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    }

    const changeName = () => {
        setName('Yahya');
    }

    const resetName = () => {
        setName('Sara');
    }

    return (<>

    <h1 className = "text-2xl font-bold text-gray-800 text-center text-decoration-style: double mb-4">This is {name}</h1>
    <div className="flex-row">
      <button className= "px-4 py-2 bg-blue-900 text-white font-semibold rounded"
    onClick={changeName}>Change Name</button>
      <button className="px-4 py-2 bg-pink-900 m-3 text-white font-semibold rounded"
    onClick={resetName}>Reset Name</button>
    </div>

    <div>
        <label> Enter name: </label>
        <input className="px-3 py-2 border border-gray-300 rounded m-2" type="text" value={name} onChange={handleNameChange} />
    </div>

    <div>
        <label> Enter email: </label>
        <div className = "text-sm text-gray-800 text-center">{email}</div>
        <input className="px-3 py-2 border border-gray-300 rounded m-3" type="email" value={email} onChange={handleEmailChange}/>
    </div>

    <div>
        <label>Enter date: </label>
        <div className = "text-sm  text-gray-800 text-center">{date}</div>
        <input className="px-3 py-2 border border-gray-300 rounded m-2 " type="date" value={date} onChange={handleDateChange}/>
    </div>
    
    </>

    )}
