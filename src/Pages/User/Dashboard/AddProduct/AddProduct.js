import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`https://quiet-peak-91569.herokuapp.com/add-product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {

            });

        alert('New Bouquet added successfully!');
        reset();
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Add Bouquet</h3>
                </div>

                <div>
                    <Container>
                        <form onSubmit={handleSubmit(onSubmit)} className="pb-4 add-product-form">
                            <input {...register("title", { required: true })} placeholder="Bouquet title" />

                            <input {...register("img", { required: true })} placeholder="Insert direct image URL" />

                            <textarea {...register("description", { required: true })} placeholder="Bouquet description" />

                            <input type="number" {...register("price", { required: true })} placeholder="Bouquet price" />

                            <input type="submit" value="Add New Bouquet" className="btn btn-secondary" />
                        </form>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default AddProduct;