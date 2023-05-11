// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router";

// export const Product = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState({});
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const getProduct = async () => {
//       setLoading(true);
//       const response = await fetch(`https://localhost:6000/product/${id}`);
//       setProduct(await response.json());
//       setLoading(false);
//     };
//     getProduct();
//   }, []);

//   const Loading = () => {
//     return <>Loading...</>;
//   };
//   const ShowProduct = () => {
//     return <>
//     </>;
//   };
//   return (
//     <div className="container">
//       <div className="row">{loading ? <loading /> : <ShowProduct />}</div>
//     </div>
//   );
// };
// export default Product;

import React from 'react'
import { NavLink } from 'react-router-dom';
import DATA from '../Data'

const Product = () => {

    const cardItem = (item) => {
        return (
            <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                <img src={item.img} class="card-img-top" alt={item.title}/>
                    <div class="card-body text-center">
                        <h5 class="card-title">{item.title}</h5>
                        <p className="lead">${item.price}</p>
                        <NavLink to={`/products/${item.id}`} class="btn btn-outline-primary">Buy Now</NavLink>
                    </div>
</div>
                );
    }

                return (
                <div>
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h1>Product</h1>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-around">
                            {DATA.map(cardItem)}
                        </div>
                    </div>
                </div>
                )
}

                export default Product