import React from "react";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTheme } from "../../context/ThemeContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  acceptTerms: yup.boolean().oneOf([true], "You must accept the terms"),
});

const LoginForm = ({ setToggleLogin, toggleLogin }) => {
  const { isDarkMode } = useTheme();
  const backgroundColorClass = isDarkMode
    ? "bg-backgroundColor-dark"
    : "bg-backgroundColor-light";
    const textColorClass = isDarkMode
    ? "text-textColor-light"
    : "text-textColor-dark";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form data submitted:', data);
    console.log(data);
  };
  return (
    toggleLogin && (
      <div className="w-screen h-screen bg-opacity-70 z-50 fixed top-0 bottom-0 left-0 bg-black overflow-auto">
        <div className={` ${backgroundColorClass} ${textColorClass} w-5/6 md:w-1/3 h-auto absolute mt-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}>
          <div className="p-6 rounded-md z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg md:xl">LOGIN ACCOUNT</h2>
              <FaXmark
                onClick={() => setToggleLogin(false)}
                className="cursor-pointer"
              />
            </div>
            <form className="flex flex-col justify-center items-start gap-2">
              <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="text"
                placeho
                lder="Email"
                className="bg-transparent w-full outline-none border-[1px] border-gray-600 rounded-sm p-2"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
              <label htmlFor="password">Password</label>
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Password"
                className="bg-transparent w-full outline-none border-[1px] border-gray-600 rounded-sm p-2"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
              <div className="flex justify-start items-center gap-3">
                <input
                  {...register("acceptTerms", { required: true })}
                  type="checkbox"
                />
                <h5 className="text-xs md:text-sm">
                  By Logging You Confirm That You Accept Our Terms & Conditions
                  And Privacy Policy
                </h5>
              </div>
              {errors.acceptTerms && (
                <span className="text-red-600">
                  {errors.acceptTerms.message}
                </span>
              )}
              <button
                className="bg-red-600 p-2 rounded-md w-full text-white"
                type="submit"
                onClick={handleSubmit(onSubmit)}
              >
                LOGIN
              </button>
              <h5>
                Have no account?{" "}
                <span className="text-red-600 font-bold cursor-pointer">
                  Register Here
                </span>
              </h5>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default LoginForm;
