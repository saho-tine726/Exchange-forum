import React from 'react'
import { signOut } from "firebase/auth";
import { SLogButton, SLogTitle, SWrapper } from '../styles/CommonStyles';
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <SWrapper>
      <SLogTitle>ログアウトしますか？</SLogTitle>
      <SLogButton>
        <button onClick={logout}>ログアウトする</button>
      </SLogButton>
    </SWrapper>
  )
};