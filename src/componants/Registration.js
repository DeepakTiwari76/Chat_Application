import React, { useState } from 'react'
import coverimg from '../componants/images/logo.jpeg'
import '../componants/Registration.css';
import {Link} from 'react-router-dom';

export default function Registration() {
    const[name,setname]=useState("")
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
    const[mobile,setmobile]=useState("")

    const handlesubmit=()=>{
        localStorage.setItem("name",name)
        localStorage.setItem("email",email)
        localStorage.setItem("mobile",mobile)
        localStorage.setItem("password",password)
    }
  return (
    <div className='main'>
        <div className='photo'>
                <img src={coverimg} alt='img' />
            </div>

            <div className='upper'>
                <p>
                    <b><h1 id='logo'>Chat App </h1></b>
                    <h2>create New Account</h2>
                </p>
                <form className='form'>
                    <div className="mb-3">
                        <input type='text' className="form-control" placeholder='Name' onChange={(e)=>setname(e.target.value)} />
                    </div>
                    
                    <div className="mb-3">

                        <input type="email" id='email'className="form-control" aria-describedby="emailHelp" onChange={(e)=>setemail(e.target.value)} placeholder='Email'/>

                    </div>
                    <div className="mb-3">
                        <input type="text" className="form-control" id="mobile" placeholder='mobile No.' onChange={(e)=>setmobile(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <input type='password'className="form-control" placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
                    </div>
                    <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Share my registration data with Chatapp</label>
                </div>
                    <button  id='signup' className="btn btn-primary" onClick={handlesubmit}>Signup</button>
                
                </form>
                <Link  to="registration" >Already Have an Account ?</Link>

            </div>

    </div>
  )
}
