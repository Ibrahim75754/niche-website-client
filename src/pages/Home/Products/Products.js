import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Prosucts.css'


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>
                setProducts(data));
    }, []);

    return (
        <div className="container py-5">
            <h1>Our Popular Products</h1>
            <p className="pb-3">Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact! Deep Impact Shaving Foam.</p>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    products.map(product => <div class="col text-start">
                        <div class="card h-100">

                            <img src={product.img} class="card-img-top img-height" alt="..." />

                            <div class="card-body">
                                <h5 class="card-title">{product.name}</h5>
                                <p class="card-text">{product.description.split(' ').slice(0, 20).toString().replace(/,/g, ' ')}...</p>
                                <div className="d-flex justify-content-between">
                                    <h4>{product.price} BDT</h4>
                                    <Link to={`/home/${product._id}`}><button className='btn btn-warning'>Purchase</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default Products;