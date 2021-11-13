import { faCommentAlt } from '@fortawesome/free-regular-svg-icons';
import { faMoneyCheckAlt, faPlus, faSignOutAlt, faTh, faThLarge, faThList, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom';
import { Col, Container, Nav, Row, Tab } from 'react-bootstrap';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../AddReview/AddReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageOrders from '../ManageOrders/ManageOrders';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';

import './Dashboard.css';
import useAuth from '../../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';

const dashboardIcon = <FontAwesomeIcon icon={faTh} />;
const reviewIcon = <FontAwesomeIcon icon={faCommentAlt} />;
const listIcon = <FontAwesomeIcon icon={faThList} />;
const plusIcon = <FontAwesomeIcon icon={faPlus} />;
const userPlus = <FontAwesomeIcon icon={faUserPlus} />;
const serviceIcon = <FontAwesomeIcon icon={faThLarge} />;
const paymentIcon = <FontAwesomeIcon icon={faMoneyCheckAlt} />;
const logoutIcon = <FontAwesomeIcon icon={faSignOutAlt} />;

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin, logout } = useAuth();

    return (
        <div>
            <Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                        <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                            <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="light" className="flex-column dash-nav">
                                    <Link to={`${url}`}><span className="me-3">{dashboardIcon}</span>Dashboard</Link>
                                    <Link to={`${url}/my-order`}><span className="me-3">{listIcon}</span>My Order</Link>
                                    <Link to={`${url}/payment`}><span className="me-3">{paymentIcon}</span>Payment</Link>
                                    <Link to={`${url}/add-review`}><span className="me-3">{reviewIcon}</span>Add Review</Link>
                                    {
                                        admin && <>
                                            <Link to={`${url}/manage-orders`}><span className="me-3">{serviceIcon}</span>Manage Orders</Link>
                                            <Link to={`${url}/add-product`}><span className="me-3">{plusIcon}</span>Add Product</Link>
                                            <Link to={`${url}/add-admin`}><span className="me-2">{userPlus}</span>Add Admin</Link>
                                        </>
                                    }
                                    <Link to='/login' onClick={logout}><span className="me-3">{logoutIcon}</span>Logout</Link>
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">
                                <Switch>
                                    <Route exact path={path}>
                                        <div>
                                            <h2 className="fw-bold">Hello <span className="text-secondary">{user.displayName}</span>!</h2>
                                        </div>
                                    </Route>
                                    <Route path={`${path}/my-order`}>
                                        <MyOrder></MyOrder>
                                    </Route>
                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <Route path={`${path}/add-review`}>
                                        <AddReview></AddReview>
                                    </Route>
                                    <AdminRoute path={`${path}/manage-orders`}>
                                        <ManageOrders></ManageOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/add-product`}>
                                        <AddProduct></AddProduct>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/add-admin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </AdminRoute>
                                </Switch>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </div>
    );
};

export default Dashboard;




/*

        BACKUP for future purpose


<Container fluid className="p-5">
                <Tab.Container id="left-tabs-example" defaultActiveKey="my-order">
                    <Row xs={1} sm={1} md={2} lg={2} xl={2}>
                        <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                            <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="" className="flex-column dash-nav">
                                    {
                                        user.emailVerified ? <>
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
                                                    eventKey="add-admin">
                                                    <span className="me-2">{userPlus}</span>Add Admin</Nav.Link>
                                            </Nav.Item>
                                        </>
                                            :
                                            <>
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
                                            </>
                                    }
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">
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
                                    <Tab.Pane eventKey="add-admin">
                                        <MakeAdmin></MakeAdmin>
                                    </Tab.Pane>
                                </Tab.Content>
                            </div>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>

*/