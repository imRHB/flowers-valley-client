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
import useAuth from '../../../../hooks/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import AdminRoute from '../../AdminRoute/AdminRoute';
import './Dashboard.css';

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
                    <Row xs={1} sm={1} md={2} lg={2} xl={2} className="g-3 g-lg-4">
                        <Col xs={12} sm={12} md={4} lg={3} xl={3}>
                            <div className="bg-light rounded-3 py-4 border" style={{ minHeight: '80vh', position: 'sticky', top: '114px' }}>
                                <Nav variant="light" className="flex-column dash-nav">
                                    {
                                        admin ? <>
                                            <Link to={`${url}`}><span className="me-3">{dashboardIcon}</span>Dashboard</Link>
                                            <Link to={`${url}/manage-orders`}><span className="me-3">{serviceIcon}</span>Manage Orders</Link>
                                            <Link to={`${url}/manage-products`}><span className="me-3">{serviceIcon}</span>Manage Products</Link>
                                            <Link to={`${url}/add-product`}><span className="me-3">{plusIcon}</span>Add Product</Link>
                                            <Link to={`${url}/add-admin`}><span className="me-2">{userPlus}</span>Add Admin</Link>
                                            <Link to='/login' className="" onClick={logout}><span className="me-3">{logoutIcon}</span>Logout</Link>
                                        </>
                                            :
                                            <>
                                                <Link to={`${url}`}><span className="me-3">{dashboardIcon}</span>Dashboard</Link>
                                                <Link to={`${url}/my-order`}><span className="me-3">{listIcon}</span>My Order</Link>
                                                <Link to={`${url}/payment`}><span className="me-3">{paymentIcon}</span>Payment</Link>
                                                <Link to={`${url}/add-review`}><span className="me-3">{reviewIcon}</span>Add Review</Link>
                                                <Link to='/login' className="" onClick={logout}><span className="me-3">{logoutIcon}</span>Logout</Link>
                                            </>
                                    }
                                </Nav>
                            </div>
                        </Col>

                        <Col xs={12} sm={12} md={8} lg={9} xl={9}>
                            <div className="bg-light rounded-3 px-2 py-4 border">
                                <Switch>
                                    <Route exact path={path}>
                                        <div>
                                            <Container>
                                                <h2 className="fw-bold">Hello <span className="text-secondary">{user.displayName}</span>!</h2>
                                                <p>You are accessing dashboard by <code>{user.email}</code></p>
                                            </Container>
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

                                    {/* Admin routes only */}

                                    <AdminRoute path={`${path}/manage-orders`}>
                                        <ManageOrders></ManageOrders>
                                    </AdminRoute>
                                    <AdminRoute path={`${path}/manage-products`}>
                                        <ManageProducts></ManageProducts>
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
