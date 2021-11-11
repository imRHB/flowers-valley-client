import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div style={{ minHeight: '50vh' }}>
            <Spinner
                animation="border"
                variant="info"
            />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children
                :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >

        </Route>
    );
};

export default PrivateRoute;