import { signInWithPopup } from "firebase/auth";
import React from 'react'
import { SLogButton, SLogTitle, SWrapper } from '../styles/CommonStyles';
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const loginInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <SWrapper>
      <SLogTitle>ログインして始める</SLogTitle>
      <SLogButton>
        <button onClick={loginInWithGoogle}>Googleでログイン</button>
      </SLogButton>
    </SWrapper>
  )
};