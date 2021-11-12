import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../../hooks/useAuth';

const UserReview = () => {
    const { user } = useAuth();
    console.log(user)
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>Review Us</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column justify-content-center align-items-center mt-5">
                <input className="w-50 mb-3 p-2" {...register("name")} value={user.displayName} />
                <input className="w-50 mb-3 p-2" {...register("img")} value={user.photoURL} />
                <input className="w-50 mb-3 p-2" {...register("description")} placeholder="Description" />
                <select className="w-50 mb-3 p-2" {...register("rating")}>
                    <option value="female">Rating Us</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <input className="btn btn-success w-50 mb-3 p-2" type="submit" />
            </form>
        </div>
    );
};

export default UserReview;