'use client'
import React, { useState } from "react";
import axios from "axios";



const ResetPasswordDialog = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");

  const handleResetPassword = () => {
    const requestObject = {
      newPassword,
      confirmPassword,
      otp,
    };

    axios
      .post("http://localhost:8001/api/auth/reset/password", requestObject)
      .then((response) => {
        // Handle success, e.g., show a success message or redirect
        console.log("Password reset successful:", response.data);
      })
      .catch((error) => {
        // Handle error, e.g., display an error message
        console.error("Password reset failed:", error);
      });

    // Close the dialog
  
  };

  return (
    <div className="dialog-box justify-center items-center w-fit" style={{ textAlign: "center"  }}>
    <h2>Reset Password</h2>
    <div className="grid grid-cols-2">
      <label>
        New Password:</label>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{ border: "1px solid #ccc" }}
        />
      
    </div>
    <div className="grid grid-cols-2">
      <label>
        Confirm Password:</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          style={{ border: "1px solid #ccc" }}
        />
      
    </div>
    <div className="grid grid-cols-2">
      <label>
        OTP:</label>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ border: "1px solid #ccc" }}
        />
      
    </div>
    <button onClick={handleResetPassword}>Reset Password</button>
  </div>

  );
};



export default ResetPasswordDialog;
