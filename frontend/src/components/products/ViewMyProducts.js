import axios from 'axios';
import './AddProduct.css'
import React,{useEffect, useState, useContext} from 'react'
import { Link, useHistory } from "react-router-dom";
import AuthContext from '../context/Authcontext';

export default function ViewMyProducts() {

        //This array uesd to save all details of products
        const [product, setProduct] = useState([]);

        const { loggedIn } = useContext(AuthContext);
        const [userId, setUserId] = useState(loggedIn.userId);
        useEffect(() => {
    
            //Call api that return all details of product
            function getAgent() {
                axios.get(`http://localhost:5000/product/view/${userId}`).then((res) => {
                    setProduct(res.data);
                }).catch((err) => {
                    
                })
            }
            getAgent();
        })

    return (
        <div className="display-box">
        <div className="header">VIEW-MY-PRODUCTS</div>
    <table className="table">
    <thead>
            <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Description</th>
                <th>User Id</th>
                <th></th>
            </tr>
            </thead>

            <tbody>

        {product.map(function(product){

                   return <tr>
                        <td>{product.name}</td>
                        <td>{product.quantity}</td>
                        <td>{product.description}</td>
                        <td>{product.userId}</td>
                        <td><Link to={"/viewOne/" + product._id}>View</Link></td>
                    </tr>
             
           
        })}
        </tbody>
    </table>
</div>

    )
}
