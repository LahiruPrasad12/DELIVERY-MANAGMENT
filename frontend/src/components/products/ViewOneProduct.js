import { useParams, Link } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validation from 'validator'
import './AddProduct.css'

export default function ViewOneProduct() {

    const { id } = useParams();
    const [oneProduct, setOneProduct] = useState([]);

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [userId, setuserId] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:5000/product/getOne/${id}`).then((res) => {
            setName(res.data.name);
            setDescription(res.data.description);
            setQuantity(res.data.quantity);
            setuserId(res.data.userId);

        }).catch((err) => {
            alert(err);
        })

    },[])

    return (
        <div className="display-box">
            <div className="header">VIEW-ONE-PRODUCTS</div>

            <div className="content">
                <input type="text" className="detail" value={name}/><br/>
                <input type="text" className="detail" value={quantity}/><br/>
                <input type="text" className="detail" value={description}/><br/>
                <input type="text" className="detail" value={userId}/><br/>
                <button className="edite">Edite</button><button className="delete">Delete</button>
            </div>
        </div>
    )
}
