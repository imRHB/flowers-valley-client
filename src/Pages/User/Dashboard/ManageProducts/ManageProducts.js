import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://quiet-peak-91569.herokuapp.com/bouquets')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products]);

    const handleDeleteOrder = bqId => {
        const deleteConfirmation = window.confirm('Do you want to delete the bouquet?');

        if (deleteConfirmation) {
            const bouquetUri = `https://quiet-peak-91569.herokuapp.com/bouquets/${bqId}`;
            fetch(bouquetUri, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    alert('Bouquet deleted successfully.');
                })
        }
    };

    return (
        <div>
            <Container>
                <div className="mb-4">
                    <h3 className="fw-bold">Manage Products</h3>
                </div>

                <Table responsive hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Bouquet Title</th>
                            <th>Bouquet Price</th>
                            <th>Availability</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            products.map((product, index) => <tr>
                                <td>{index + 1}</td>
                                <td><img src={product.img} style={{ width: '72px', border: '1px solid gray', borderRadius: '4px' }} alt="" /></td>
                                <td>{product.title}</td>
                                <td>${product.price}</td>
                                <td>In Stock</td>
                                <td><Button onClick={() => handleDeleteOrder(product._id)} variant="danger" size="sm">DELETE</Button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default ManageProducts;