import { FcGoogle } from "react-icons/fc";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img className="w-24 md:m-28" src={logo} alt="" />
      </div>
      <div className="flex justify-center items-center flex-col gap-4">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
          Login With
        </h1>
        <button className="py-2 px-12 md:px-16 flex justify-between border rounded-full items-center relative">
          <FcGoogle className="text-2xl absolute top-1/2 -translate-y-1/2 left-1" />
          Continue With Google
        </button>
        <p>
          Don`t have an account?{" "}
          <span className="text-primary underline">
            <Link to="/register">create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
