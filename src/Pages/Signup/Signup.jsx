import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Components/Hooks/useAuth";
import { toast } from "react-toastify";


const SignUp = () => {
    const { createUser, googleLogin } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const handleSubmitForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const passwordRegex = /^.{6,}$/;
        const isValidPassword = passwordRegex.test(password);

        if (isValidPassword) {
            createUser(email, password)
                .then(() => {
                    // Signed in 
                    toast.success('Sing Up Successful');
                    navigate('/login');
                })
                .catch(err => console.log(err.message));
        } else {
            toast.error("Password must be at least 6 characters.");
        }

    }
    const handleGoogleSignIn = () => {
        googleLogin()
            .then(() => {
                toast.success('Sign in successful');
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => console.log(err.message));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Welcome</h1>
                    <p className="py-6">Welcome to our platform! We are excited to introduce our enhanced video playlist login feature. Registration is quick and easy — simply sign up to unlock a world of personalized video playlists.</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmitForm} className="card-body">
                        <h1 className="text-3xl text-center font-bold">Sign up now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-success">Sign Up</button>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <Link to='/login' className="text-md">Already have an account <span className=" link font-bold link-hover">Login</span> </Link>
                            </label>
                        </div>
                        <div className="divider">OR</div>
                    </form>
                    <div className="card-body pb-10">
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-block btn-info">Sing up With Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;