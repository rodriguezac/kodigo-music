import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Form Data:", data);
    onClose(); // Cierra el formulario
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white text-black p-6 rounded-lg shadow-lg w-[90%] max-w-md"
      >
        <h2 className="text-2xl font-semibold mb-4">Log in</h2>
        <div className="mb-4">
          <label className="block text-sm font-medium">Email or Username</label>
          <input
            type="text"
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
            {...register("password", { required: "Password is required" })}
            className={`w-full border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } p-2 rounded-lg`}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-[#482368] text-white py-2 rounded-lg"
        >
          Log in
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

export default LoginForm;
