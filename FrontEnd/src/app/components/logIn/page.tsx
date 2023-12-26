import React, { useState } from 'react';
import Head from 'next/head';
import axios from 'axios';

type ChildProps = {
  pageChanger: React.Dispatch<React.SetStateAction<number>>;
  changeNick: React.Dispatch<React.SetStateAction<string>>;
  setAuthStr: React.Dispatch<React.SetStateAction<string>>;
};

export default function Login({ pageChanger, changeNick, setAuthStr }: ChildProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try{
        const response = await axios.post('https://ca12-37-99-87-186.ngrok-free.app/api/auth/login',{"email":email,"password":password,"rememberMe":true});
        setAuthStr(response.data.token.accessToken);
        changeNick(response.data.user);
    }catch(error){
        console.log("Well there is some problem in SignUp");
    }
    pageChanger(3);
  };

  return (
    <>
      <div className="logIncontainer">
        <Head>
          <title>Login</title>
        </Head>
        <main className="logInmain">
          <h1>Login</h1>
          <form className="logInform" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              className="logIninput"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="logIninput"
              value={password}
              onChange={handlePasswordChange}
            />
            <button type="submit" className="logInbutton">
              Login
            </button>
          </form>
        </main>
      </div>
    </>
  );
}
