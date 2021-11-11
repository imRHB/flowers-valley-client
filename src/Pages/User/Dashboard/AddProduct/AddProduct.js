import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './AddProduct.css';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        fetch(`http://localhost:5000/add-product`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {

            });
        alert('New Bouquet added successfully');
        reset();
    };

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
                <hr />

                <Row xs={1} sm={1} md={1} lg={1} xl={1} className="g-3">
                    <Col className="">
                        <div className="container bg-light">
                            <h3 className="text-center fs-3 fw-bold text-info py-4">Add New Rose Bouquet</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="pb-4 add-package-form">
                                <input {...register("title", { required: true })} placeholder="Bouquet title" />

                                <input {...register("img", { required: true })} placeholder="Insert direct image URL" />

                                <textarea {...register("description", { required: true })} placeholder="Bouquet description" />

                                <input type="number" {...register("price", { required: true })} placeholder="Bouquet price" />

                                <input type="submit" value="Add New Bouquet" className="btn btn-primary" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;