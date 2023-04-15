import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"

const ProductDetail = () => {
    const { id } = useParams(); //
    const [state, setState] = useState({
        id: "",
        title: "",
        description: "",
        image: "",
        price: 0,
        category: "",
    });

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setState(data);
            });
    }, [])
    return (
        <div style={{ textAlign: "center", marginTop: "100px" }}>
            <h2> Category : {state.category}</h2>
            <h3>Title : {state.title}</h3>
            <img src={state.image} width={300} height={300} />
            <p> Price : ${state.price}</p>
            <p> Description : {state.description}</p>
        </div>
    )
}

export default ProductDetail