import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './PlaceOrder.css';

const disclaimerIcon = <FontAwesomeIcon icon={faExclamationTriangle} />;

const PlaceOrder = () => {
    const { bqId } = useParams();
    const { user } = useAuth();
    const history = useHistory();

    const { register, handleSubmit, reset } = useForm();
    const [orderedBouquet, setOrderedBouquet] = useState({});

    useEffect(() => {
        fetch(`https://quiet-peak-91569.herokuapp.com/bouquets/${bqId}`)
            .then(res => res.json())
            .then(data => setOrderedBouquet(data));
    }, [bqId]);

    const onSubmit = (data) => {

        fetch(`https://quiet-peak-91569.herokuapp.com/orders`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...orderedBouquet, ...data, status: 'Pending' })
        })
            .then(res => res.json())
            .then(result => {
                alert('You ordered the bouquet. You can track or cancel your order from dashboard.');
                reset();
                history.push('/rose-bouquet');
            });
    };

    return (
        <div className="my-5">
            <Container>
                <div>
                    <h2 className="text-center fw-bold text-success py-4">Order Checkout</h2>
                </div>

                <Row xs={1} sm={1} md={1} lg={2} xl={2}>
                    <Col>
                        <div className="bg-light py-5 rounded-3 border">
                            <p className="fs-4 fw-bold text-center text-info">Product Information</p>

                            <div className="mx-3">
                                <div className="text-center">
                                    <img src={orderedBouquet.img} alt="" className="w-50 border rounded-3" />
                                </div>
                                <Row xs={2} sm={2} md={2} lg={2} className="my-4">
                                    <Col className="col-3 col-sm-3 col-md-3 col-lg-3">
                                        <p className="fs-5 fw-bold">Name</p>
                                        <p className="fs-5 fw-bold">Type</p>
                                        <p className="fs-5 fw-bold">Price</p>
                                    </Col>

                                    <Col className="col-9 col-sm-9 col-md-9 col-lg-9">
                                        <p className="fs-5">{orderedBouquet.title}</p>
                                        <p className="fs-5">Bouquet</p>
                                        <p className="fs-5">${orderedBouquet.price}</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>

                        <div className="my-3 px-2 py-4 rounded-3 border">
                            <p className="text-center fs-4 fw-bold text-warning">Product Disclaimer <span>{disclaimerIcon}</span></p>
                            <ul className="text-muted">
                                <li>The actual product may vary from the images shown on the website</li>
                                <li>The actual colours may be vary from those shown depending on the device you are using to view the product or the angle of the item is photographed</li>
                            </ul>
                        </div>
                    </Col>

                    <Col>
                        <div className="bg-light py-5 rounded-3 border" style={{ position: 'sticky', top: '100px' }}>
                            <p className="fs-4 fw-bold text-center text-info">User Information</p>

                            <form onSubmit={handleSubmit(onSubmit)} className="pb-4 place-order-form">
                                <input {...register("displayName", { required: true })} value={user.displayName} readOnly />

                                <input {...register("email", { required: true })} value={user.email} readOnly />

                                <textarea {...register("shippingAddress", { required: true })} placeholder="Enter shipping address" />

                                <input type="number" {...register("phone", { required: true })} placeholder="Phone number" />

                                <input type="submit" value="Place Order" className="btn btn-secondary" />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PlaceOrder;