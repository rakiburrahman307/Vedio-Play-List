import { createContext, useState } from "react";
import PropTypes from 'prop-types';
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
    const authInfo = {

    }



    return (
        <AuthContext.Provider value={authInfo}>
           {
            loading ? (
                <span className="loading absolute top-1/2 left-1/2 loading-ring loading-lg"></span>
            ):(
                {children}  
            )
           }
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;