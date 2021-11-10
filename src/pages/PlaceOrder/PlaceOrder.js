import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Shared/Header/Header';

const PlaceOrder = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data =>
                setProduct(data));
    }, []);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        // use AXIOS for post into data base
        axios.post('https://frightful-labyrinth-57921.herokuapp.com/placeOrder', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert('Order successfully complete');
                    reset();
                }
            })
    }
    const { user } = useAuth();
    return (
        <div className="container text-start py-5">
            <Header></Header>
            <div className="row">
                <div className="col-md-6 border-end">
                    <img src={product.img} className="img-fluid img-height mb-5" alt="" />
                    <h5 class="card-title text-primary">{product.name}</h5>
                    <h5 className="text-primary"> Price: {product.price} BDT</h5>
                    <p class="card-text">{product.description}</p>
                </div>
                <div className="col-md-6">
                    <h1 className="text-center mb-5 text-warning">Fill up the Form to Place Oder</h1>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center">
                            <input className="w-50 mb-3"  {...register("name")} type="text" value={user.displayName} required />
                            <input className="w-50 mb-3" {...register("email")} type="email" value={user.email} required />
                            <input className="w-50 mb-3"  {...register("packageId")} type="text" value={productId} />
                            <input className="w-50 mb-3"  {...register("packageName")} type="text" value={product.name} />
                            <textarea className="w-50 mb-3"  {...register("address")} type="text" placeholder="Address" required />
                            <input className="w-50 mb-3"  {...register("phone")} type="number" placeholder="Phone Number" required />
                            <input className="btn btn-warning w-50 mb-3" type="submit" value="Place Order" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;