import { useForm } from "react-hook-form";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Account created successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Create an account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <div>
            <input
              type="text"
              placeholder="First Name"
              {...register("firstName", { required: "First name is required" })}
              className={`mt-1 block w-full focus:border-primary focus:outline-none border-b-2 ${
                errors.firstName ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              type="text"
              placeholder="Last Name"
              {...register("lastName", { required: "Last name is required" })}
              className={`mt-1 block w-full focus:border-primary focus:outline-none border-b-2 ${
                errors.lastName ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.lastName.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Enter a valid email",
                },
              })}
              className={`mt-1 block w-full focus:border-primary focus:outline-none border-b-2 ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className={`mt-1 block w-full focus:border-primary focus:outline-none border-b-2 ${
                errors.password ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className={`mt-1 block w-full focus:border-primary focus:outline-none border-b-2 ${
                errors.confirmPassword ? "border-red-500" : "border-gray-300"
              } focus:border-blue-500`}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 focus:border-primary focus:outline-none hover:bg-pink-600 transition"
          >
            Create an account
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-pink-500 font-medium hover:underline"
          >
            Login
          </a>
        </p>
        <div className="flex flex-col gap-2 items-center justify-center py-2">
          <button className="py-2 text-sm px-12 md:px-16 flex justify-between border rounded-full items-center relative">
            <FaFacebook className="text-2xl absolute top-1/2 -translate-y-1/2 left-1 text-blue-500" />
            Continue With Google
          </button>
          <button className="py-2 text-sm px-12 md:px-16 flex justify-between border rounded-full items-center relative">
            <FcGoogle className="text-2xl absolute top-1/2 -translate-y-1/2 left-1" />
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
