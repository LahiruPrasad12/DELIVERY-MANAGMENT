import { useParams, Link } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import validation from 'validator'

export default function ViewOneProduct() {

    const { id } = useParams();

    useEffect(() => {
        
    })

    return (
        <div>
            <h1>View One Product</h1>
        </div>
    )
}
