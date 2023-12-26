import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';
import { log } from 'console';

type ChildProps = {
  pageChanger: React.Dispatch<React.SetStateAction<number>>;
  changeNick: React.Dispatch<React.SetStateAction<string>>;
  setAuthStr: React.Dispatch<React.SetStateAction<string>>;
};

export default function SignUp({ pageChanger, changeNick, setAuthStr }: ChildProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
        const response = await axios.post('https://ca12-37-99-87-186.ngrok-free.app/api/auth/signup', {
          "userName": username,
          "email": email,
          "password": password
        });
        const accessToken = response.data.token.accessToken;
        setAuthStr(accessToken);
        changeNick(username);
    }catch(error){
        console.log("Well there is some problem in SignUp");
    }
    pageChanger(3);
  };

  return (
    <>
      <div className="signUpcontainer">
        <Head>
          <title>Sign Up</title>
        </Head>
        <main className="signUpmain">
          <h1>Sign Up</h1>
          <form className="signUpform" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Username"
              className="input"
              value={username}
              onChange={handleUsernameChange}
            />
            <input
              type="email"
              placeholder="Email"
              className="input"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="input"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className="signUpbutton">
              Sign Up
            </button>
          </form>
        </main>
      </div>
    </>
  );
}