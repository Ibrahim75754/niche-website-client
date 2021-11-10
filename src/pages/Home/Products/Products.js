import React from 'react';
import { Link } from 'react-router-dom';
import './Prosucts.css'


const Products = () => {
    const products = [
        {
            id: 1,
            img: 'https://i.ibb.co/B4rSVDZ/549c8b9dfe5220020cb50961e0e6e712.jpg',
            name: 'Nivea Men Deep Impact Smooth Shaving Foam 200 ml',
            description: 'Get a Real smooth shave with NIVEA MEN Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact!',
            price: 300
        },
        {
            id: 2,
            img: 'https://i.ibb.co/mznJMqr/b6a050c506107a7b17dcd7ca8997cfe8.jpg',
            name: 'Super Speedy thick & rich saving foam 450 ml Regular',
            description: 'Get a Real smooth shave with NIVEA MEN Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact!',
            price: 250
        },
        {
            id: 3,
            img: 'https://i.ibb.co/fYqkqm3/4901517bec074b02fde8dc19d98cec5f.png',
            name: 'Nivea Men Sensitive Shaving Foam 200 ml',
            description: 'Get a Real smooth shave with NIVEA MEN Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact!',
            price: 270
        },
        {
            id: 4,
            img: 'https://i.ibb.co/B4rSVDZ/549c8b9dfe5220020cb50961e0e6e712.jpg',
            name: 'Nivea Men Deep Impact Smooth Shaving Foam 200 ml',
            description: 'Get a Real smooth shave with NIVEA MEN Deep Impact Shaving Foam.Enriched with Black Carbon, it prepares your skin for a comfortable shave and provides a smooth razor glide, giving you a clean skin feeling to make a deep impact!',
            price: 300
        }
    ];
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
                                <p class="card-text">{product.description}</p>
                                <div className="d-flex justify-content-between">
                                    <h4>{product.price} BDT</h4>
                                    <Link to={`/home/${product.id}`}><button className='btn btn-warning'>Purchase</button></Link>
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