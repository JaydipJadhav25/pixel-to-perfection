"use client";
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast"
import { useRouter } from 'next/navigation';
import Link from 'next/link';


const Page = () => {

  const router = useRouter();

    const [user , setUser] = useState({
        email: "" ,
        password: "" ,
        name: "",
        role: ""
    });

    console.log(user)

    const [buttondisable , setbuttondiseable] = useState(false);

    const [loading , setloading] = useState(false);

    //function

    const signup = async() =>{
      try {
        
        setloading(true);
        console.log("user : " , user)
        const res = await axios.post("http://localhost:8000/user/signup" , user);

        console.log("user success : " , res.data);
        router.push("/login");


      } catch (error :any) {
        console.log(error.massage)
        // toast.error(error.massage);
        
      }
    }

    //codn on files and button 
    useEffect(() =>{
      if(user.email.length > 0 && user.password.length > 0 && user.name.length > 0){
        setbuttondiseable(false);
      }else{
        setbuttondiseable(true);
      }

    } , [user])

  return (
<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-500">
  <h1>{loading ? "loading........... " : "signup"}</h1>
  <hr />

  <label htmlFor="username">Name</label>
  <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    type="text" 
    id="name"
    value={user.name}
    onChange={(e) => setUser({ ...user, name: e.target.value })}
    placeholder="Enter your name"
  />

  <label htmlFor="email">Email</label>
  <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    id="email"
    type="text"
    value={user.email}
    onChange={(e) => setUser({ ...user, email: e.target.value })}
    placeholder="Email"
  />

  <label htmlFor="password">Password</label>
  <input 
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
    id="password"
    type="password"
    value={user.password}
    onChange={(e) => setUser({ ...user, password: e.target.value })}
    placeholder="Password"
  />

  {/* 🔽 Role Dropdown */}
  <label htmlFor="role">Role</label>
  <select
    id="role"
    value={user.role}
    onChange={(e) => setUser({ ...user, role: e.target.value })}
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
  >
    <option value="">Select role</option>
    <option value="student">Student</option>
    <option value="mentor">Mentor</option>
  </select>

  <button
    onClick={signup}
    className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
  >
    {buttondisable ? "NoSignUp" : "SignUp"}
  </button>

  <Link href="/login">Visit to Login Page</Link>
</div>

  )
}

export default Page;