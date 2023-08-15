import React,{useState} from 'react'
import '../componants/Login.css';
import coverimg from './images/logo.jpeg';
import { Link } from 'react-router-dom';


function Login() {
 const [email,setemail]=useState("")
const [password,setpassword]=useState("")

const handle=()=>{
localStorage.setItem("email",email)
localStorage.setItem("password",password)

}
    return (
        <div className='mainlogin'>
            <div className='photologin '>
                <img src={coverimg} alt='img' />
            </div>
        <div className='upperlogin'>
        <p>
                    <b><h1 id='logo'>Chat App </h1></b>
                    <h2>SIGN IN</h2>
                </p> 
            <form className='formlogin'>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control"  placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={(e)=>setemail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" placeholder='password' id="exampleInputPassword1" onChange={(e)=>setpassword(e.target.value)} />
                </div>
                <button  className="btn btn-primary" onClick={handle}>Signin</button><br/>
                <Link to="/">Don't have any account ?</Link>
                
            </form>

        </div>
        </div>
        
    )
}

export default Login