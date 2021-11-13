import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, loading } = useAuth();

    if (loading) {
        return <div className="text-center">
            <Spinner
                animation="border"
                variant="warning"
            />
        </div>
    }

    return (
        <Route
            {...rest}
            render={({ location }) => user.email && admin ? children
                :
                <Redirect
                    to={{
                        pathname: '/',
                        state: { from: location }
                    }}
                ></Redirect>
            }
        >

        </Route>
    );
};

export default AdminRoute;