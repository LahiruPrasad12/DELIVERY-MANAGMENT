import { useParams, Link } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validation from 'validator'
import './AddProduct.css'

export default function ViewOneProduct() {

    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState([]);

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);
    const [productId, setProductId] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [userId, setuserId] = useState("");

    useEffect(() => {
        //This api used to call get one specific data end point
        axios.get(`http://localhost:5000/product/getOne/${id}`).then((res) => {
            setName(res.data.name);
            setDescription(res.data.description);
            setQuantity(res.data.quantity);
            setuserId(res.data.userId);
            setProductId(res.data._id);
        }).catch((err) => {
            alert(err);
        })

    },[])


    //This function used to update product detals
    async function update(){

        var title = document.getElementById("edtBtn");

        if(count != 0){
           
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
        
                        //Create object which contain all updated details
                        const updateProduct = {
                            name,quantity,userId,description
                        }
        
                        //This api used to call update end point
                        await axios.put(`http://localhost:5000/product/update/${id}`,updateProduct).then(()=>{
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

        }else{
            //This count variable used to check whether user edite the data or update the data
            setCount(count+1);

            //If user click first shy on edite button become all texboxes can editable and edite button text become into update button
            document.getElementById("edtBtn").innerText="Update";
            document.getElementById("myText1").disabled = false;
            document.getElementById("myText2").disabled = false;
            document.getElementById("myText3").disabled = false;
    

        }
    }


    //This function used to delete a product from databse
    async function deleteProduct(){
        try{
            const result = window.confirm("Do you really want to Delete?");

            if(result==true){

                axios.delete(`http://localhost:5000/product/remove/${id}`).then((res) => {
                    console.log(res);
                    window.location = "/view";
                }).catch(() => {
                    document.getElementById('some_error').style.display = "block";
                })

            }
        }catch(err){
            document.getElementById('some_error').style.display = "block";
        }
    }




    return (
        <div className="display-box">
            <div className="header">VIEW-ONE-PRODUCTS</div>

            <div className="content">
                <input type="text" id="myText1" className="detail" value={name} disabled = "true"
                onChange={(e)=> setName(e.target.value)} value={name}/><br/>
                <div id="name_error" style={{ display: "none", color:"red", marginRight:220,marginTop:-5, fontSize:20}}>please enter name</div><br />

                <input type="text" id="myText2" className="detail" value={quantity} disabled = "true"
                onChange={(e)=> setQuantity(e.target.value)} value={quantity}/><br/>
                 <div id="quantity_error" style={{  display: "none", color:"red", marginRight:220,marginTop:-5, fontSize:20}}>please enter quantity</div><br />

                <input type="text" id="myText3" className="detail" value={description} disabled = "true"
                onChange={(e)=> setDescription(e.target.value)} value={description}/><br/>
                <div id="description_error" style={{  display: "none", color:"red", marginRight:600,marginTop:-5, fontSize:20}}>please enter description</div><br />
                <div id="some_error" style={{  display: "none", color:"red", marginRight:450,marginTop:-5, fontSize:20}}>something going else please try agein later...</div><br />

                <input type="text" id="myText4" className="detail" value={userId} disabled = "true"/><br/>
                <button className="edite" id="edtBtn" onClick={e=>{update()}}>Edite</button><button className="delete" onClick={e=>{deleteProduct()}}>Delete</button>
            </div>
        </div>
    )
}
