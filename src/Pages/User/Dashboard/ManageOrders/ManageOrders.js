import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch('')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    return (
        <div>

        </div>
    );
};

export default ManageOrders;