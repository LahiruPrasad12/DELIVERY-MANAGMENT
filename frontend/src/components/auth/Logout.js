import React,{useHistory, useContext, useEffect, useState} from 'react'
import axios from 'axios';
import AuthContext from '../context/Authcontext'


export default function Logout() {

    //This is used to inform that user is logged out
    const {getLogged} = useContext(AuthContext);

    async function logOut(){
        try{
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
