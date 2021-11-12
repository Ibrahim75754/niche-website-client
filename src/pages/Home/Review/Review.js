import { Rating } from "@mui/material";
import React, { useEffect, useState } from "react";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className="container my-5">
            <h1 className="mb-4 text-color">Testimonials</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    reviews.map(review => <div>
                        <div class="card mb-3 py-3 " >
                            <div class="row">
                                <div class="col-md-4">
                                    <img src={review.img} class="img-fluid rounded-circle mt-3 ms-3" alt="..." />
                                </div>
                                <div class="col-md-8 text-start">
                                    <div class="card-body">
                                        <h5 class="card-title">{review.name}</h5>
                                        <p class="card-text">{review.description}</p>
                                        <Rating name="read-only" value={review.rating} readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }


            </div>
        </div>
    );
};

export default Review;