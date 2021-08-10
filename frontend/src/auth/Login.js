import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import "./login.css"
import axios from "axios"
import AuthContext from '../context/Authcontext';

export default function Login() {

    const[email,setEmail] = useState("");
    const [password, setpassword] = useState("");

    //This is used to inform that user is loged in
    const {getLogged} = useContext(AuthContext);

    async function login(){
       
        if(email.length == 0){
            document.getElementById('mail_error').style.display = "block";
            document.getElementById('exists').style.display = "none";
        }else{
            try{
                const loginData = {
                    email,
                    password,
                }
    
                await axios.post("http://localhost:5000/auth/login",loginData).then(()=>{
                    getLogged();
                   alert("login success");
                }).catch(()=>{
                    document.getElementById('exists').style.display = "block";
                    document.getElementById('mail_error').style.display = "none";
                })
    
            }catch(err){
                console.error(err);
            }
        }
    
            
        }
    return (
        <div className="container">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                {/* <img className="logoImage" src={image1} alt="Logo"/> */}
                <h1 className="text-center">LOG IN</h1>
                
                <input type="mail" className="form-control" name="Email" placeholder="Enter your E-mail address"
                onChange={(e)=> setEmail(e.target.value)} value={email} required/>
               <div id="mail_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter email address</div><br />
                <input type="password" className="form-control" name="password" placeholder="Enter your password"
                 onChange={(e)=> setpassword(e.target.value)} required/>
                  {/* <div id="password_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter password</div><br /> */}
                  <div id="exists" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>mail address or password is invalid</div><br />
                <a onClick={e=>{login()}} ><div className="btn btn-info">log in</div></a>
                <a href="#"><div className="btn btn-info1">Forgot password?</div></a>
               <h3 className= "register">I haven't an account?<Link to="/register" className="regLink"> Register</Link></h3>
               
            </div>
        </div>
        
    </div>
    )
}
