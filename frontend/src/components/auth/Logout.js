import React,{useHistory, useContext, useEffect, useState} from 'react'
import axios from 'axios';
import AuthContext from '../context/Authcontext'


export default function Logout() {

    //This is used to inform that user is logged out
    const {getLogged} = useContext(AuthContext);

    //This function is used to log out the user
    async function logOut(){
        try{

            //Here call the user lgout api end point to log out the user
            await axios.get("http://localhost:5000/auth/logout").then(async()=>{
            await getLogged();
            window.location = "/"
        }).catch((err)=>{
            alert(err)
        })

        }catch(err){

        }

    }

    useEffect(() => {
        logOut();
     }, [])
 

    return (
        <div>
            
        </div>
    )
}
