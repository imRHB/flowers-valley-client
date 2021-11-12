import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="py-5 bg-dark">
            <Container>
                <Nav className="flex-column">
                    <NavLink to="/my-order">My Order</NavLink>
                    <NavLink to="/payment">Payment</NavLink>
                    <NavLink to="/add-review">Add Review</NavLink>
                    <NavLink to="/add-product">Add Product</NavLink>
                    <NavLink to="/manage-orders">Manage Orders</NavLink>
                    <NavLink to="/make-admin">Make Admin</NavLink>
                </Nav>
            </Container>
        </div>
    );
};

export default Dashboard;