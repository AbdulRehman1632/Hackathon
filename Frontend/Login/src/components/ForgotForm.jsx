
// ResetPassword.js
import React from "react";
import { useForm } from "react-hook-form";
import { postReq } from "../api";
import toast from "react-hot-toast";
import '../pages/styling/forgotPassword.css'



const ForgotPassword = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = async (data) => {
      console.log(data);
      toast.success('Your request noted')
    
    };
  
    return (
     
<div className="forgot-password-container">
  <div className="form-container">
    <h2 className="heading">Forgot Password</h2>
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      {/* Email Field */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
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

      {/* Submit Button */}
      <button
        type="submit"
        className="submit-button"
      >
        Send Reset Link
      </button>
    </form>
  </div>
</div>


    );
  };
  
  export default ForgotPassword;
