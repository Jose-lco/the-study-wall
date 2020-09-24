import React, { useState } from "react";
import API from "../utils/API2";


const Home = () => {
    const [userObject, setUserObject] = useState({
        username: "",
        email: "",
        password: ""
      })
    function handleInputChange(event) {
        const { name, value } = event.target;
        setUserObject({...userObject, [name]: value})
      };
    function handleFormSubmit(event) {
        event.preventDefault();
        if (userObject.username && userObject.email && userObject.password) {
          API.signup({
            username: userObject.username,
            email: userObject.email,
            password: userObject.password
          })
            .then(() => setUserObject({
              username: "",
              email: "",
              password: ""
            }))
            .catch(err => console.log(err));
        }
      };
    return (
        <div className = "container">
            <br/>
            <h2 className = "info">To access the study wall and all its knowledge, please sign up below!</h2>
            <h3 className = "info">Returning learners, please sign in</h3>
            <br/>
            <input
            onChange={handleInputChange}
            name="username"
            placeholder="Username (required)"
            value={userObject.username} 
            className = "input"
             type = "text"></input>
            <br/><br/>
            <input onChange={handleInputChange}
            name="email"
            placeholder="Email (required)"
            value={userObject.email} 
            className = "input"
             type = "email"></input>
            <br/><br/>
            <input onChange={handleInputChange}
            name="password"
            placeholder="Password (required)"
            value={userObject.password} 
            className = "input"
             type = "password"></input>
            <br/><br/>
    
                <button className = "button is-info" id = "sign-up-btn" onClick={handleFormSubmit}>
                    Sign Up
                </button>
          
            <br/><br/>
            <img src = {require("../Images/Desk-Live-Sharing.png")} alt="comic of people reading" />
        </div>
            
    );
};

export default Home;
