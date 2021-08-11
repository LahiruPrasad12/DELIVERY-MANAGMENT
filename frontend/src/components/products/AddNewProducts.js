import React,{useState,useContext} from 'react'
import AuthContext from '../context/Authcontext';
import axios  from 'axios'
import "../layout/SideNav.css"
import './AddProduct.css'
export default function AddNewProducts() {

    const { loggedIn } = useContext(AuthContext);

    const [name, setname] = useState("")
    const [quantity, setquatity] = useState(0);
    const [userId, setUserId] = useState(loggedIn.userId);
    const [description, setdescription] = useState("");

    async function addProduct(){

        //Validate user entered details
        if(name.length==0){
            document.getElementById('name_error').style.display = "block";
            document.getElementById('quantity_error').style.display = "none";
            document.getElementById('some_error').style.display = "none";
            document.getElementById('description_error').style.display = "none";
        }else if(quantity == 0){
            document.getElementById('name_error').style.display = "none";
            document.getElementById('quantity_error').style.display = "block";
            document.getElementById('description_error').style.display = "none";
            document.getElementById('some_error').style.display = "none";

        }else if(description.length == 0){
            document.getElementById('name_error').style.display = "none";
            document.getElementById('quantity_error').style.display = "none";
            document.getElementById('description_error').style.display = "block";
            document.getElementById('some_error').style.display = "none";
        }else{

            try{

                const newProduct = {
                    name,quantity,userId,description
                }

                await axios.post("http://localhost:5000/product/add",newProduct).then(()=>{
                    window.location = "/view";
                }).catch((err)=>{
                    document.getElementById('name_error').style.display = "none";
                    document.getElementById('quantity_error').style.display = "none";
                    document.getElementById('description_error').style.display = "none";
                    document.getElementById('some_error').style.display = "block";

                })

            }catch(err){
                document.getElementById('name_error').style.display = "none";
                document.getElementById('quantity_error').style.display = "none";
                document.getElementById('description_error').style.display = "none";
                document.getElementById('some_error').style.display = "block";

            }

        }
        
    }

    return (
        <div>
            <div className="header">ADD-NEW-PRODUCT</div>

            <div className="content">
                <input className="inputField" type="text" placeholder="Enter Product Name Here..." 
                 onChange={(e)=> setname(e.target.value)} value={name} required/><br/>
                <div id="name_error" style={{ display: "none", color:"red", marginRight:220,marginTop:-5, fontSize:20}}>please enter name</div><br />

                <input className="inputField" type="number" placeholder="Enter Quantity Here..." 
                 onChange={(e)=> setquatity(e.target.value)} required/><br/>
                <div id="quantity_error" style={{  display: "none", color:"red", marginRight:220,marginTop:-5, fontSize:20}}>please enter quantity</div><br />

                <input className="inputField2" type="text" placeholder="Enter Description Here..."
                 onChange={(e)=> setdescription(e.target.value)} required /><br/>
                <div id="description_error" style={{  display: "none", color:"red", marginRight:600,marginTop:-5, fontSize:20}}>please enter description</div><br />
                <div id="some_error" style={{  display: "none", color:"red", marginRight:450,marginTop:-5, fontSize:20}}>something going else please try agein later...</div><br />

                <button className="submit" onClick={e=>{addProduct()}} > Submit </button>
            </div>
            
        </div>
        
    )
}
