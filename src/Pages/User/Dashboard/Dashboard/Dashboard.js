import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faMoneyCheckAlt, faPlus, faThLarge, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';

import './Dashboard.css';

const reviewIcon = <FontAwesomeIcon icon={faCommentAlt} />;
const listIcon = <FontAwesomeIcon icon={faThList} />;
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const userPlus = <FontAwesomeIcon icon={faUserPlus} />;
const serviceIcon = <FontAwesomeIcon icon={faThLarge} />;
const paymentIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />;

const Dashboard = () => {

    return (
        <div>
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row>
                        <Col sm={3}>
                            <div className="bg-light rounded-3 py-3" style={{ minHeight: '80vh', position: 'sticky', top: '48px' }}>
                                <Nav variant="" className="flex-column dash-nav">
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="my-order"
                                        >
                                            <span className="me-3">{listIcon}</span>My Order</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="payment">
                                            <span className="me-3">{paymentIcon}</span>Payment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="add-review">
                                            <span className="me-3">{reviewIcon}</span>Add Review</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="add-product">
                                            <span className="me-3">{plusIcon}</span>Add Product</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="manage-orders">
                                            <span className="me-3">{serviceIcon}</span>Manage Orders</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link
                                            className="dash-nav-link"
                                            eventKey="make-admin">
                                            <span className="me-2">{userPlus}</span>Make Admin</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </div>
                        </Col>

                        <Col sm={9}>
                            <div className="bg-light rounded-3 p-3">
                                <Tab.Content>
                                    <Tab.Pane eventKey="my-order">
                                        <MyOrder></MyOrder>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="payment">
                                        <Payment></Payment>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="add-review">
                                        <AddReview></AddReview>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="add-product">
                                        <AddProduct></AddProduct>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="manage-orders">
                                        <ManageOrders></ManageOrders>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="make-admin">
                                        <MakeAdmin></MakeAdmin>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;