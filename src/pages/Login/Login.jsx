import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
    const {signIn} = useContext(AuthContext);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {email, password};
        console.log(userData);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .then(error => console.log(error))
    }

    return (
        <div className="hero bg-base-200 py-24">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left mr-24">
                    <img src={img} alt="" />
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email"
                                placeholder="email" 
                                className="input input-bordered" required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input 
                                type="password"
                                name="password" 
                                placeholder="password" 
                                className="input input-bordered" required 
                            />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="pt-4">New hare? Please
                            <Link className="text-orange-700" to="/signUp"> SignUp</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;