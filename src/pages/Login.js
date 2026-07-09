import { TextField, Button } from "@mui/material";
import React, { useState } from "react";

export default function Login() {
  const [input, setInput] = useState({ email: "", password: "" });
  const [accept, setAccept] = useState(false);
  

  const [users] = useState(
    JSON.parse(localStorage.getItem("users")) || [],
  );
  const [errors, setErrors] = useState(null);

  console.log(users);

  function submit(e) {
  
  
  
    const foundUser = users.find(
      (u) => u.email === input.email && u.password === input.password,
    );
    if (foundUser) {
      
      localStorage.setItem("currentUser", JSON.stringify(foundUser));
      window.location = "/"; // Redirect to home page
    } else {
      const errors = <div>Invalid email or password</div>;
      setErrors(errors);
    }
    e.preventDefault();
    setAccept(true);
  }

  return (
    <div className="container w-75  d-flex justify-content-center flex-column align-items-center vh-100">
      <h6 style={{ marginBottom: "-12px" }}>Abdallah</h6>
      <p className="m-0">commerce</p>
      <h1>Log in</h1>
      <form className="d-flex gap-2 flex-column w-50" onSubmit={submit}>
        <label>Email</label>
        <TextField
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          type="email"
          placeholder="Email"
        />
        {input.email === "" && accept && (
          <span className="text-danger">Email is required</span>
        )}
        <label>Password</label>
        <TextField
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          type="password"
          placeholder="Password"
        />
        {input.password.length < 6 && accept && (
          <span className="text-danger">
            Password must be at least 6 characters
          </span>
        )}

        <Button type="submit" variant="contained">
          {" "}
          Login
        </Button>
      </form>
      {errors && <div className="text-danger">{errors}</div>}
    </div>
  );
}
