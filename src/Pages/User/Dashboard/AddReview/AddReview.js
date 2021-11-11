import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';

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
        console.log(data);
        alert('Your review added successfully');
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
                            <h3 className="text-center fs-3 fw-bold text-info py-4">Give Us Review</h3>

                            <form onSubmit={handleSubmit(onSubmit)} className="pb-4 add-package-form">
                                <input {...register("name", { required: true })} defaultValue={user.displayName} readOnly />

                                <textarea {...register("comment", { required: true })} placeholder="Your comment" />

                                <input type="submit" value="Add Review" className="btn btn-primary" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AddReview;