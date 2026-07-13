import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "../css/style.css"


export default function Signin() {
  const [input, setInput] = useState({
    name: "",
    user: "",
    email: "",
    password: "",
  });
  const [confirm, setConfirm] = useState("");
  const [users, setUsers] = useState([]);
  const [accept, setAccept] = useState(false);
  const [errors, setErrors] = useState(false);

  console.log("input==>", errors);

  useEffect(() => {
    const saved = localStorage.getItem("users");
    if (saved) {
      setUsers(JSON.parse(saved));
    }
  }, []);

  function submit(e) {
    const too = users.find((e) => e.email === input.email);
    console.log(too);
    setErrors(too && accept &&  true );

    e.preventDefault();

    setAccept(true);

    if (
      input.name !== "" &&
      input.user !== "" &&
      input.email !== "" &&
      input.password.length >= 6 &&
      confirm === input.password
    ) {
      const add =
        input.password === confirm && !too ? [...users, input] : users;
      setUsers(add);

      localStorage.setItem("users", JSON.stringify(add));
    } else {
      e.preventDefault();

      setAccept(true);
    }
  }

  return (
    <div className="container w-75  d-flex justify-content-center flex-column align-items-center vh-100">
      <h6 style={{ marginBottom: "-12px" }}>Abdallah</h6>
      <p className="m-0">commerce</p>
      <h1>sign in</h1>
      <form className="d-flex  flex-column w-50" onSubmit={submit}>
        {/* <label>Name</label> */}
        <TextField
          className="input-field"
          label="Name"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
          type="text"
          
        />
        {input.name === "" && accept && (
          <span className="text-danger ">Name is required</span>
        )}
        {/* <label>User name</label> */}
        <TextField
          className="input-field"
          label="User name"
          value={input.user}
          onChange={(e) => setInput({ ...input, user: e.target.value })}
        />
        {input.user === "" && accept && (
          <span className="text-danger">User name is required</span>
        )}
        {/* <label>Email</label> */}
        <TextField
          className="input-field"
          label="Email"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
          type="email"
        />
        {input.email === "" && accept && (
          <span className="text-danger">Email is required</span>
        )}
        {errors&& <span className="text-danger">Email is repeated</span>}
        {/* <label>Password</label> */}
        <TextField
          className="input-field"
          label="Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
          type="password"
        />
        {input.password.length < 6 && accept && (
          <span className="text-danger">
            Password must be at least 6 characters
          </span>
        )}
        {/* <label>confirm Password</label> */}
        <TextField
          className="input-field"
          label="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          type="password"
        />
        {confirm !== input.password && accept && (
          <span className="text-danger">Password does not match</span>
        )}
        <Button type="submit" variant="contained" className="bg-success mt-5">
          {" "}
          register
        </Button>
      </form>

      <Link to="/Login" className="icon-link icon-link-hover link-success mt-5">
        Log in
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="bi"
          aria-hidden="true"
        >
          <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
        </svg>
      </Link>
    </div>
  );
}
