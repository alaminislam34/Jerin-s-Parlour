import { useForm } from "react-hook-form";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Submitted Successfully: ", data);
    alert("Message Sent Successfully!");
  };

  return (
    <div className="min-h-screen  bg-[#FFF9F5] flex items-center justify-center">
      <div className="w-full max-w-2xl p-8">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">
          Let us handle your project, professionally.
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Full Name */}
            <div>
              <input
                type="text"
                placeholder="Full Name"
                {...register("fullName", { required: "Full Name is required" })}
                className={`py-2 px-4 bg-white w-full ${
                  errors.fullName ? "border-red-500" : ""
                }`}
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Last Name */}
            <div>
              <input
                type="text"
                placeholder="Last Name"
                {...register("lastName", { required: "Last Name is required" })}
                className={`py-2 px-4 bg-white w-full ${
                  errors.lastName ? "border-red-500" : ""
                }`}
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.lastName.message}
                </p>
              )}
            </div>

            {/* Email Address */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
                className={`py-2 px-4 bg-white w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number */}
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                {...register("phone", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10,15}$/,
                    message: "Enter a valid phone number",
                  },
                })}
                className={`py-2 px-4 bg-white w-full ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>
          </div>

          {/* Message */}
          <textarea
            placeholder="Your Message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters",
              },
            })}
            className={`px-4 py-2 w-full mt-4 ${
              errors.message ? "border-red-500" : ""
            }`}
            rows="4"
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="btn bg-pink-500 hover:bg-pink-600 text-white px-8"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
