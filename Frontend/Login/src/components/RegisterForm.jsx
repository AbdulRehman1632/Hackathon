import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postReq } from "../api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "../pages/styling/register.css";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [istoken, setisTOken] = useState(token);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const response = await postReq("/auth/register", data);
      console.log(response.data.newUser.role);
      navigate('/login');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (istoken) {
      navigate("/dashboard");
    }
  }, [token]);

  return (
    <div className="register-container">
      <div className="form-container">
        <h2 className="heading">Register</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          {/* Name Field */}
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("username", { required: "Name is required" })}
              className="form-input"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                  message: "Enter a valid email",
                },
              })}
              className="form-input"
              placeholder="example@mail.com"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="form-input"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>
          {/* CNIC Field */}
          <div className="form-group">
            <label htmlFor="cnic" className="form-label">
              CNIC (National ID)
            </label>
            <input
              id="cnic"
              type="number"
              {...register("cnic", {
                required: "CNIC is required",
                pattern: {
                  value: /^[0-9]{13}$/, // Validate CNIC with exactly 13 digits
                  message: "Enter a valid CNIC (13 digits)",
                },
              })}
              className="form-input"
              placeholder="1111111111111  "
            />
            {errors.cnic && (
              <p className="error-message">{errors.cnic.message}</p>
            )}
          </div>
          {/* Role Field */}
          <div className="form-group">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <select
              id="role"
              {...register("role", { required: "Role is required" })}
              className="form-input"
            >
              <option value="">Select a role</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
            </select>
            {errors.role && (
              <p className="error-message">{errors.role.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;