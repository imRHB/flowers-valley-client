import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        data.status = 'Pending';
        fetch(``, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {

            });
        alert('New package added successfully');
        reset();
    };

    return (
        <div>
            <Container>
                <h2 className="text-center fs-1 fw-bold text-secondary my-5">Dashboard</h2>
                <hr />

                <Row xs={1} sm={1} md={1} lg={1} xl={2} className="g-3">
                    <Col className="col-12 col-md-12 col-lg-4 col-xl-4">
                        <Nav className="flex-column dash-nav">
                            <NavLink to="/dashboard">Manage Packages</NavLink>
                            <NavLink to="/all-booking">All Booking</NavLink>
                            <NavLink to="/my-booking">My Booking</NavLink>
                            <NavLink to="/add-package">Add Package</NavLink>
                        </Nav>
                    </Col>

                    <Col className="col-12 col-md-12 col-lg-8 col-xl-8">
                        <div className="container bg-light">
                            <h3 className="text-center fs-3 fw-bold text-info py-4">Add New Tour Package</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="pb-4 add-package-form">
                                <input {...register("title", { required: true })} placeholder="Tour package title" />
                                <input {...register("location", { required: true })} placeholder="Tour destination" />
                                <input {...register("img", { required: true })} placeholder="Insert direct image URL" />
                                <textarea {...register("description", { required: true })} placeholder="Tour description" />
                                <input type="number" {...register("price", { required: true })} placeholder="Tour package price" />
                                <input type="number" {...register("people", { required: true })} placeholder="Specific number of people for the tour" />
                                <input type="number" {...register("day", { required: true })} placeholder="How many days" />
                                <input type="number" {...register("night", { required: true })} placeholder="How many night" />
                                <input type="submit" value="Add New Package" className="btn btn-primary" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddProduct;