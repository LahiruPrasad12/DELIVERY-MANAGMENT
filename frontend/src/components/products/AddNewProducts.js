import React,{useState} from 'react'
import "../layout/SideNav.css"
import './AddProduct.css'
export default function AddNewProducts() {

    const [userMail, setmail] = useState("")
    const [subject, setsubject] = useState("");
    const [priority, setpriority] = useState("");
    const [endDate, setendDate] = useState();
    const [description, setdescription] = useState("")

    return (
        <div>
            <div className="header">ADD-NEW-PRODUCT</div>

            <div className="content">
                <input className="inputField" type="text" placeholder="Enter Product Name Here..." /><br/>
                <input className="inputField" type="number" placeholder="Enter Quantity Here..." /><br/>
                <input className="inputField2" type="text" placeholder="Enter Description Here..." /><br/>
                <button className="submit"> Submit </button>
            </div>
            
        </div>
        
    )
}
