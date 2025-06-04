import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

const App = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");

  //Initialize three additional hooks to help you manage the state of your application
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  //Create a function to handle the user sign in
  const submit = async (e) => {
    //prevent your site from reloading
    e.preventDefault();
    //Update the loading hook with a message
    setLoading("Please wait as we submit your details...");

    try {
      //create a new form data object
      const data = new FormData();
      //append the two details i.e email and password onto the form data
      data.append("username", username);
      data.append("email", email);
      data.append("password", password);
      data.append("phone", number);
      //post the data through the api
      const response = await axios.post(
        "https://tiaj3pt00.pythonanywhere.com/api/signup",
        data
      );
      //update the loading with back to default
      setLoading("");
      //Update the success hook with the response message
      setSuccess(response.data.message);
      //Clear the hooks for the form input fields
      setUsername("");
      setEmail("");
      setPassword("");
      setNumber("");
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  return (
    <div>
      <Container>
        <SignInCard>
          <Logo>Soluna Jewelry</Logo>
          <Title>Sign up</Title>

          <b className="text-success">{loading}</b>
          <b className="text-success">{success}</b>
          <b className="text-danger">{error}</b>

          <Form onSubmit={submit}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />

            <Button type="submit">Sign Up</Button>
          </Form>
          <Links>
            <p>
              Already have an account?{" "}
              <Link to={"/signin"} className="text-info">
                Sign in
              </Link>
            </p>
          </Links>
        </SignInCard>
      </Container>
      <Footer />
    </div>
  );
};

export default App;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, rgb(147, 211, 236), #1e2a47);
  font-family: "Times New Roman", serif;
`;

const SignInCard = styled.div`
  background: #f7f5f2;
  border-radius: 15px;
  padding: 40px;
  width: 100%;
  max-width: 450px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

const Logo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: #b09b5b;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 26px;
  color: #1e2a47;
  margin-bottom: 30px;
  font-family: "Times New Roman", serif;
  font-weight: lighter;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 15px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  outline: none;
  transition: border 0.3s ease;
  background: #fff;

  &:focus {
    border: 2px solid #b09b5b;
  }

  ::placeholder {
    color: #b0a29d;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #b09b5b;
  color: white;
  font-size: 18px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #a08747;
    transform: scale(1.05);
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 14px;
  color: #1e2a47;
`;
