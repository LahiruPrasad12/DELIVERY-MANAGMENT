import axios from 'axios';
import './AddProduct.css'
import React,{useEffect, useState} from 'react'
import { Link, useHistory } from "react-router-dom";


export default function ViewAllProduct() {

    const history = useHistory();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        function getAgent() {
            axios.get("http://localhost:5000/product/view").then((res) => {
                setProduct(res.data);
            }).catch((err) => {
                
            })
        }
        getAgent();
    })

    return (
        <div className="display-box">
            <div className="header">VIEW-ALL-PRODUCTS</div>
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
                            <td><Link to={"/front-office-manager/viewOne/" + product._id}>View</Link></td>
                        </tr>
                 
               
            })}
            </tbody>
        </table>
    </div>
    )
}
