import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Components/Hooks/useAuth';
const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <span className="loading absolute top-1/2 left-1/2 loading-ring loading-lg"></span>
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

PrivateRoute.propTypes = {
    children: PropTypes.node
};

export default PrivateRoute;