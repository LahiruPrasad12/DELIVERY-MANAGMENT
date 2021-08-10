import React,{ useState } from 'react'
import { Link } from 'react-router-dom';
import image1 from "../images/logo2.png"
import axios from "axios"
import "./register.css"
import validation from 'validator'

export default function Register(e) {
   

    //Here define the useState to capture user entere data
    const[firstName,setfName] = useState("");
    const[lastName,setlName] = useState("");
    const[phone,setPhone] = useState("");
    const[email,setEmail] = useState("");
    const[address,setaddress] = useState("");
    const [password, setpassword] = useState("");
    const [verifyPassword, setconPassword] = useState("");

    //This function used to register a new user by saving his data
    async function register(){

        //validate user entered data
        if(firstName.length==0){
            document.getElementById('fName_error').style.display = "block";
            document.getElementById('lName_error').style.display = "none";
            document.getElementById('phone_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(lastName.length==0){
            document.getElementById('fName_error').style.display = "none";
            document.getElementById('lName_error').style.display = "block";
            document.getElementById('phone_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(phone.length != 10){
            document.getElementById('fName_error').style.display = "none";
            document.getElementById('lName_error').style.display = "none";
            document.getElementById('phone_error').style.display = "block";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(email.length==0 || !validation.isEmail(email)){
            document.getElementById('fName_error').style.display = "none";
            document.getElementById('lName_error').style.display = "none";
            document.getElementById('phone_error').style.display = "none";
            document.getElementById('mail_error').style.display = "block";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(address.length == 0){
            document.getElementById('fName_error').style.display = "none";
            document.getElementById('lName_error').style.display = "none";
            document.getElementById('phone_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('address_error').style.display = "block";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(password.length < 6){
            document.getElementById('fName_error').style.display = "none";
            document.getElementById('lName_error').style.display = "none";
            document.getElementById('phone_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "block";
            document.getElementById('conPassword_error').style.display = "none";
            document.getElementById('exists').style.display = "none";
        }else if(verifyPassword.length == 0 || password!=verifyPassword ){
            document.getElementById('fName_error').style.display = "none";
            document.getElementById('lName_error').style.display = "none";
            document.getElementById('phone_error').style.display = "none";
            document.getElementById('mail_error').style.display = "none";
            document.getElementById('address_error').style.display = "none";
            document.getElementById('password_error').style.display = "none";
            document.getElementById('conPassword_error').style.display = "block";
            document.getElementById('exists').style.display = "none";
        }else{
            try{
                const registreData = {
                    firstName,
                    lastName,
                    phone,
                    email,
                    address,
                    password
                };
    
                //Here call the user register API end point to register a new user
                await axios.post("http://localhost:5000/auth/register",registreData).then(()=>{
                    window.location="/login"
                }).catch((err)=>{
                    document.getElementById('fName_error').style.display = "none";
                    document.getElementById('lName_error').style.display = "none";
                    document.getElementById('phone_error').style.display = "none";
                    document.getElementById('mail_error').style.display = "none";
                    document.getElementById('address_error').style.display = "none";
                    document.getElementById('password_error').style.display = "none";
                    document.getElementById('conPassword_error').style.display = "none";
                    document.getElementById('exists').style.display = "block";
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
                <h1 className="text-center1">REGISTER</h1>
                
                <input type="text" className="form-control" name="Email" placeholder="Enter your First Name"
                onChange={(e)=> setfName(e.target.value)} value={firstName} required/>
                 <div id="fName_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter first name</div><br />
                
                 <input type="text" className="form-control" name="Email" placeholder="Enter your Last Name"
                onChange={(e)=> setlName(e.target.value)} value={lastName} required/>
                 <div id="lName_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter last name</div><br />

                 <input type="phone" className="form-control" name="Email" placeholder="Enter your Contact Number"
                onChange={(e)=> setPhone(e.target.value)} value={phone} required/>
                 <div id="phone_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter valid contact numbe</div><br />

                 <input type="email" className="form-control" name="Email" placeholder="Enter your E-mail address"
                onChange={(e)=> setEmail(e.target.value)} value={email} required/>
                 <div id="mail_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter valid email</div><br />

                 <input type="text" className="form-control" name="Email" placeholder="Enter your Address"
                onChange={(e)=> setaddress(e.target.value)} value={address} required/>
                 <div id="address_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter address</div><br />

                <input type="password" className="form-control" name="password1" placeholder="Enter your password"
                 onChange={(e)=> setpassword(e.target.value)} value={password} required/>
                  <div id="password_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5 }}>please enter a password of at least 6 character</div><br />
                
                <input type="password" className="form-control" name="password2" placeholder="Confirm your password"
                 onChange={(e)=> setconPassword(e.target.value)} value={verifyPassword} required/>
                  <div id="conPassword_error" style={{ display: "none", color:"red", marginLeft:0,marginTop:-5, background:"transparent" }}>confirm password doesn't match</div><br />
                  <div id="exists" style={{ display: "none", color:"red", marginLeft:0,marginTop:-30 }}>entered mail address is already exists</div><br />

                <a href onClick={e=>{register(e)}}  ><div className="btn btn-info6">Register</div></a>
               <h3 className= "register">I haven an account?<Link to="/login" className="regLink"> Log in</Link></h3>
            </div>
            
            <div className="col-md-3">

            </div>
        </div>
        
    </div>
    )
}
