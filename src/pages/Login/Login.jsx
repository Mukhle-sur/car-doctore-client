// import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        navigate(from, { replace: true });
        console.log(loginUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mt-12 items-center">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="border p-16 rounded-md">
        <h2 className="text-4xl font-semibold text-center mb-11">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6 ">
            <input
              type="submit"
              value="Sign In"
              className="btn btn-error text-white"
            />
          </div>
        </form>
        <div>
          <SocialLogin></SocialLogin>
          <p className="text-center text-[#737373] text-lg font-semibold">
            Do Not Have an account?
            <Link to="/signUp" className="text-[#FF3811]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
