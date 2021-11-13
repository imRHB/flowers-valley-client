import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import './AddReview.css';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/add-review`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {

            });

        alert('Your review added successfully. Thanks for your review.');
        reset();
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Give Us Review</h3>
                </div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)} className="pb-4 add-review-form">
                        <input {...register("name", { required: true })} defaultValue={user.displayName} readOnly />

                        <input {...register("email", { required: true })} defaultValue={user.email} readOnly />

                        <textarea {...register("comment", { required: true })} placeholder="Your comment" />

                        <input type="number" {...register("rating", { min: 1, max: 5, required: true })} placeholder="Rate between 1 - 5" />

                        <input type="submit" value="Add Review" className="btn btn-secondary" />
                    </form>
                </div>
            </Container>
        </div>
    );
};

export default AddReview;