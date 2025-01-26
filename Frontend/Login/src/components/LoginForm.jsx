import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { postReq } from "../api";
import { useNavigate } from "react-router-dom";
import "../pages/styling/login.css";

const LoginForm = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [istoken, setisTOken] = useState(token);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await postReq("/auth/login", data);
      console.log(response.data.user._id); // You can check the user data here

      const { token, user } = response.data;

      // Store token and user data in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userId", user._id); // Store user ID in localStorage
      localStorage.setItem("role", user.role); // Store user role in localStorage

      if (token) {
        if (user.role === "user") {
          navigate("/dashboard");
        } else {
          navigate("/dashboardAdmin");
        }
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  // If there's already a token, navigate to dashboard
  useEffect(() => {
    if (istoken) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  // Logout function
  const handleLogout = () => {
    // Clear the localStorage data and navigate to login page
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("role");
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="login-container">
      <div className="form-container">
        <h2 className="heading">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
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

          {/* Submit Button */}
          <button type="submit" className="submit-button">
            Login
          </button>
        </form>
        <a href="/forgot-password" className="forgot-password-link">
          Forgot password?
        </a>
        <p className="signup-link">
          Don't have an account?{" "}
          <a href="/register" className="signup-text">
            Register here
          </a>
        </p>

        {/* Logout Button (only visible when logged in) */}
        {localStorage.getItem("token") && (
          <button className="logout-button" onClick={handleLogout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default LoginForm;