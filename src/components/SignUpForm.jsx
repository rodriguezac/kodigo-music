import React from "react";
import { useForm } from "react-hook-form";

const SignUpForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Sign Up Form Data:", data);
    onClose(); // Cierra el formulario
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Sign up</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`w-full border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className={`w-full border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === watch("password") || "Passwords do not match",
            })}
            className={`w-full border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#482368] text-white py-2 rounded-lg"
        >
          Sign up
        </button>
        <button
          type="button"
          onClick={onClose}
          className="w-full mt-2 bg-gray-300 py-2 rounded-lg"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
