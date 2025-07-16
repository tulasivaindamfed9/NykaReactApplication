import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  // creating useStates for both email and password

  const [email, updatedEmail] = useState("");
  const [password, updatedPassword] = useState("");

  function getEmail(receivedEmail) {
    // console.log("changed mail", receivedEmail.target.value);
    updatedEmail(receivedEmail.target.value); //updates with recently entered email on UI
  }

  function getPassword(receivedPassword) {
    // console.log("password", receivedPassword.target.value);
    updatedPassword(receivedPassword.target.value); //updates with recently entered password on UI
  }

 
  // async await function follows here
  //this tells us if we are loading
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();

  // creating a function to "register" through post method api calling
  async function registerfun() {
    setLoading(true);
    console.log(loading)
    try {
      const newuser = await axios.post(
        " https://api.escuelajs.co/api/v1/users/",
        {
          name: "name",
          email: email,
          password: password,
          avatar: "https://picsum.photos/800",
        }
      );
      console.log(newuser.data);
      setData(newuser.data);
console.log(data)
      // storing name,email,password of new user in session storage
      sessionStorage.setItem("email", newuser.data.email);
      sessionStorage.setItem("password", newuser.data.password);

    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  }

  // creating a function to login through post method api calling
  // It generates access and refresh tokens
  async function loginfun() {
    setLoading(true);
    try {
      const user = await axios.post(
        "https://api.escuelajs.co/api/v1/auth/login",
        {
          email:email,
          password: password,
        }
      );
      console.log(user.data.access_token);
      const accessToken=user.data.access_token;
      

      // checking user is registered or not by using authorization
      const validUser=await axios.get("https://api.escuelajs.co/api/v1/auth/profile",
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      console.log(validUser);
      const authorization=validUser.config.headers.Authorization
      sessionStorage.setItem("Authorization",authorization);

      // if session storage access token matches with login user access token , navigate to home page
      if(sessionStorage.getItem("Authorization")){
        navigate("/Home")
      }else{
        alert("Not a valid user. Register to login")
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  }

  // async function getdata() {
  //   //function to call API
  //   try {
  //     setLoading(true); //start loading the products
  //     //api call
  //     const response = await axios.post(
  //       "https://api.escuelajs.co/api/v1/auth/login",
  //       {
  //         email: "john@mail.com",
  //         password: "changeme",
  //       }
  //     );
  //     setData(response.data);
  //     console.log(response.data.access_token);
  //     localStorage.setItem("access-token", response.data.access_token);
  //   } catch (error) {
  //     console.error("Error fetching the data: ", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // // -----function for api post method to get a product
  // const [postApidata,updatedPostApi]=useState([]) //useState to store api data

  // async function apigetfun() {
  //   try {
  //     setLoading(true);
  //     const postResponse = await axios.get(
  //       "https://api.escuelajs.co/api/v1/auth/profile",
  //       { headers: { Authorization: `Bearer ${data}` } }
  //     );

  //     setData(postResponse.data.name);
  //     console.log(postResponse.data.name);
  //     localStorage.setItem("itemAdded", postResponse.data.name);
  //   } catch (error) {
  //     console.error("Error fetching the data: ", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }
  //  --------

  return (
    <>
      <div className="loginClass">
        <form class="formclass">
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={getEmail}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={getPassword}
            />
          </div>
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
            </label>
          </div>
          {/* creating button for login */}
          <button type="button" className="btn btn-primary" onClick={loginfun}>
            Login
          </button>
          {/*creating button to register for new user  */}
          <button
            type="button"
            className="btn btn-primary"
            style={{ marginLeft: "30px" }}
            onClick={registerfun}
          >
            Register
          </button>
        </form>
      </div>

      <h1>Email: {email}</h1>
      <h2>Password: {password}</h2>
      <b>
        This login page is created using link,routing concepts by manually
        typing the data
      </b>
    </>
  );
}

export default Login;
