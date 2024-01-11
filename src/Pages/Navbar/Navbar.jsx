import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from "../../Components/Hooks/useAuth";
import { useState } from "react";

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [toggle, setToggle] = useState(false);
    const navLink = <>
        <li><Link to='/' className=" mr-2 font-bold">Home</Link></li>
    </>
    return (
        <div className={`navbar bg-base-100 sticky top-0 z-20 shadow-lg`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg onClick={() => setToggle(!toggle)} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    {
                        toggle ? (
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 text-white rounded-box w-52">
                                {/* Nav ber Links For Mobile Size  */}
                                {navLink}
                            </ul>
                        ) : (null)
                    }
                </div>
                <Link className="btn btn-ghost normal-case text-xl text-black ">Video Play List</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* Nav ber Links For Desktop Size  */}
                    {navLink}
                </ul>
            </div>
            <ToastContainer />
            <div className="navbar-end">

                {user ? (
                    <div className="group dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt="User Avatar" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="group-hover:block hidden z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 transition-transform duration-200 ease-in-out delay-200"
                        >
                            {/* Profile Menu Item */}
                            <h2 className="fond-bold ml-3 my-2">{user.displayName}</h2>
                            <li><button className="hover:bg-red-500 hover:text-white" onClick={logOut}>Logout</button></li>
                        </ul>
                    </div>


                ) : (
                    <Link
                        to='login'
                        className="bg-gradient-to-r from-teal-400 to-teal-600 text-white font-semibold py-2 px-4 rounded-br-full rounded-tl-full transition duration-300 ease-in-out hover:scale-x-105"
                    >
                        Login
                    </Link>
                )}

            </div>
        </div>
    );
};

export default Navbar;