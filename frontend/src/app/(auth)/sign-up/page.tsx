"use client"

import React, { use, useState } from 'react'
import "./style.css";
import { json } from 'stream/consumers';
import { POST } from '@/app/api/user/signup/route';

const Page = () => {

    const [user , setUser] = useState({
        email: "" ,
        password: "" ,
        username: ""
    });

const [loading , setloding] = useState(false);

const submite = async( ) =>{
    setloding(true);


    const result = await fetch("http://localhost:3000/api/user/signup" , {
      method : "POST",
      headers :{
        "Content-Type" : "application/json"
       },
       body : JSON.stringify(user )

    })

    console.log("result : " , result.body);


    console.log("user data : " , user);
    setTimeout(() =>{
        setloding(false)
    } , 2000);



    // try {
        
    //     const reuslt = 


    // } catch (error) {
        
    // }

}


  return (
   <>
   
   <div className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">

    <main className='main'>

        <div className='box'>
        
        

        <label htmlFor="username">username</label>
      <input 
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      type="text" 
      id='username'
      value={user.username}
      onChange={(e) => setUser({...user , username:e.target.value})}
      placeholder='enter your username'
      />
    <br />


   
    <label htmlFor="username">email</label>
    <br />
      <input 
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      type="text" 
      id='username'
      value={user.email}
      onChange={(e) => setUser({...user , email:e.target.value})}
      placeholder='enter your email'
      />
    <br />


    
    <label htmlFor="username">password</label>
      <input 
         className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"
      type="text" 
      id='username'
      value={user.password}
      onChange={(e) => setUser({...user , password:e.target.value})}
      placeholder='enter your password'
      />
    <br />

           

    <button
            onClick={submite}
             className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            >
                
                {
                    loading ?  " loding" : "signUp"
                }
                </button>





        </div>


    </main>


   </div>

   
   </>
  )
}


export default Page;