import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // const confirm = form.confirm.value;
    console.log(name, email, password);

    createUser(email, password)
      .then((result) => {
        const signUpUser = result.user;
        console.log(signUpUser);
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
        <h2 className="text-4xl font-semibold text-center mb-11">Sign Up</h2>
        <form onSubmit={handleRegister}>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-lg">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              name="name"
              className="input input-bordered text-base text-[#A2A2A2]"
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-lg">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered text-base text-[#A2A2A2]"
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-lg">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered text-base text-[#A2A2A2]"
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          {/* <div className="form-control mb-6">
            <label className="label">
              <span className="label-text font-bold text-lg">
                Confirm Password
              </span>
            </label>
            <input
              type="text"
              placeholder="Confirm Password"
              name="confirm"
              className="input input-bordered text-base text-[#A2A2A2]"
              required
            />
          </div> */}
          <div className="form-control mt-6 ">
            <input
              type="submit"
              value="Sign Up"
              className="btn btn-error text-white"
            />
          </div>
        </form>
        <div>
          <SocialLogin></SocialLogin>

          <p className="text-center text-[#737373] text-lg font-semibold">
            Already have an account?
            <Link to="/login" className="text-[#FF3811]">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
