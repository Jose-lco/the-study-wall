import React, { useState, useContext } from 'react';
import {  useHistory } from 'react-router-dom';
import { AuthContext } from "../contexts/AuthContext";
import API from '../utils/API2';



export const SignIn = () => {
  const { toggleAuth } = useContext(AuthContext);
  let history = useHistory();
  const [userObject, setUserObject] = useState({
    email: "",
    password: ""
  })
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUserObject({ ...userObject, [name]: value })
  };
  function handleFormSubmit(event) {
    event.preventDefault();
    if (userObject.password && userObject.email) {
      API.login({
        email: userObject.email,
        password: userObject.password
      })
        .then(result => {
          console.log(result)
          if (result.status === 200) {
            toggleAuth()
            setTimeout(() => {
              history.push("/members")
          }, 1000);
          }
        })
        .catch(err => console.log(err))
    };
  }
    return (
      <div>
        <div className="container">
          <h2 className="signing-in">Input your info to Sign In</h2>
          <br /><br />
          <input onChange={handleInputChange}
            name="email"
            placeholder="Email (required)"
            value={userObject.email}
            className="input"
            type="email"></input>
          <br /><br />
          <input onChange={handleInputChange}
            name="password"
            placeholder="Password (required)"
            value={userObject.password}
            className="input"
            type="password"></input>
          <br /><br />

          <button className="button is-info" id="sign-up-btn" onClick={handleFormSubmit}>Sign in</button>
          <br />
        </div>
      </div>
    );
  };





