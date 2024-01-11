import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./FireBase/FireBaseConfig";
import { toast } from "react-toastify";
export const AuthContext = createContext()
const AuthProvider = ({ children }) => {
    // google provider create here 
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    //  sign in with google 
    const googleLogin =()=>{
        setLoading(true);
        return signInWithPopup(auth,provider);
    }
     // sign in with Email and password 
    const signInEmailAndPass =(email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //  create user with email and password
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user logout 
    const logOut =()=>{
        setLoading(true);
        signOut(auth)
        .then(()=>{
            toast.success('Log Out Success')
        })
        .catch(err => console.log(err.message)); 
    };

    // user state changes 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if (currentUser) {
                setUser(currentUser);
            }else{
                setUser(null);
            }
            setLoading(false);
        });
        return ()=> unSubscribe();
    },[])


    const authInfo = {
        loading,
        user,
        googleLogin,
        signInEmailAndPass,
        createUser,
        logOut,
        setLoading

    }



    return (
        <AuthContext.Provider value={authInfo}>
         {
            loading ?(<span className="loading absolute top-1/2 left-1/2 loading-ring loading-lg"></span>)
            :(
                children
            )
         } 
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;