import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const myOrdersUri = `http://localhost:5000/orders/${user.email}`;

        fetch(myOrdersUri)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders]);

    const handleDeleteOrder = bqId => {
        const deleteConfirmation = window.confirm('Do you want to cancel the order?');

        if (deleteConfirmation) {
            const bouquetUri = `http://localhost:5000/orders/${bqId}`;
            fetch(bouquetUri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Order cancelled successfully.');
                })
        }

    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">My Order</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Bouquet Title</th>
                            <th>Bouquet Price</th>
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
                                <td>Pending</td>
                                <td><Button onClick={() => handleDeleteOrder(order._id)} variant="danger" size="sm">CANCEL</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default MyOrder;