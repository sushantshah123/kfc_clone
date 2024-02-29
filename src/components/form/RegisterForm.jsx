import React from "react";
import { useForm } from "react-hook-form";
import { FaXmark } from "react-icons/fa6";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTheme } from "../../context/ThemeContext";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone Number must be 10 digits")
    .required("Phone Number is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  confirm: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  acceptTerms: yup.boolean().oneOf([true], "You must accept the terms"),
});

const RegisterForm = ({ setToggleRegister, toggleRegister }) => {
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

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    toggleRegister && (
      <div className="w-screen h-screen bg-opacity-70 z-50 fixed top-0 bottom-0 left-0 bg-black overflow-auto">
        <div className={` ${backgroundColorClass} ${textColorClass} w-5/6 md:w-1/3 h-auto absolute mt-24 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ease-in-out duration-500`}>
          <div className="p-6 rounded-md z-50 overflow-y-auto">
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-bold text-lg md:xl">
                REGISTER NEW ACCOUNT
              </h2>
              <FaXmark
                onClick={() => setToggleRegister(!toggleRegister)}
                className="cursor-pointer"
              />
            </div>
            <form
              className="flex flex-col justify-center items-start gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="firstName">First Name</label>
              <input
                {...register("firstName", { required: true })}
                type="text"
                placeholder="First Name"
                className="bg-transparent w-full outline-none border-[1px] border-gray-600 rounded-sm p-2"
              />
              {errors.firstName && (
                <span className="text-red-600">First Name is required</span>
              )}

              <label htmlFor="">Last Name</label>
              <input
                {...register("lastName", { required: true })}
                type="text"
                placeholder="Last Name"
                className="bg-transparent w-full outline-none border-[1px] border-gray-600 rounded-sm p-2"
              />
              {errors.lastName && (
                <span className="text-red-600">Last Name is required</span>
              )}
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                {...register("phoneNumber", {
                  required: true,
                })}
                type="text"
                placeholder="Phone Number"
                className="bg-transparent w-full outline-none border-[1px] border-gray-600 rounded-sm p-2"
              />
              {errors.phoneNumber && (
                <span className="text-red-600">
                  {errors.phoneNumber.message}
                </span>
              )}
             <label htmlFor="email">Email</label>
              <input
                {...register("email", {
                  required: true,
                })}
                type="text"
                placeho lder="Email"
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

              <label htmlFor="confirm">Confirm Password</label>
              <input
                {...register("confirm", { required: true })}
                type="password"
                placeholder="Confirm Password"
                className="bg-transparent w-full outline-none border-[1px] border-gray-600 rounded-sm p-2"
              />
              {errors.confirm && (
                <span className="text-red-600">{errors.confirm.message}</span>
              )}

              <div className="flex justify-start items-center gap-3">
                <input
                  {...register("acceptTerms", { required: true })}
                  type="checkbox"
                />
                <h5 className="text-xs md:sm">
                  By Registering You Confirm That You Accept Our Terms &
                  Conditions And Privacy Policy
                </h5>
              </div>
              {errors.acceptTerms && (
                <span className="text-red-600">
                  {errors.acceptTerms.message}
                </span>
              )}
              <button
                type="submit"
                className="bg-red-600 p-2 rounded-md w-full text-white"
              >
                SIGN UP
              </button>
              <h5>
                Already have an account?{" "}
                <span className="text-red-600 font-bold cursor-pointer">
                  Login Here
                </span>
              </h5>
            </form>
          </div>
        </div>
      </div>
    )
  );
};

export default RegisterForm;
