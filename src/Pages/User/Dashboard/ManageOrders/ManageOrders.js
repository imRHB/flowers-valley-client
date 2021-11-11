import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div className="my-5">
            <Container>
                <h2 className="text-center my-4 fs-1 fw-bold text-secondary">Manage Orders</h2>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bouquet Title</th>
                            <th>Bouquet Price</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <td>{index + 1}</td>
                                <td>{order.title}</td>
                                <td>${order.price}</td>
                                <td>{order.userName}</td>
                                <td>{order.userEmail}</td>
                                <td>Pending</td>
                                <td><Button variant="success" size="sm">APPROVE</Button> <Button variant="danger" size="sm">DELETE</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageOrders;