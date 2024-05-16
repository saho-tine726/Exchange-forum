import React from 'react'
import styled from 'styled-components';
import { Link } from "react-router-dom"

export const Nav = ({ isAuth }) => {
  return (
    <SContainer>
      <SNav>
        <SItem>
          <Link to="/">ホーム</Link>
        </SItem>
        {!isAuth ? (
          <SItem>
            <Link to="/login">ログイン</Link>
          </SItem>
        ) : (
          <>
            <SItem>
              <Link to="/createpost">投稿</Link>
            </SItem>
            <SItem>
              <Link to="/logout">ログアウト</Link>
            </SItem>
          </>
        )}
      </SNav>
    </SContainer>
  )
};

const SContainer = styled.header`
  padding: 15px 40px;
  border-bottom: 1px solid #000;
`;

const SNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
`;

const SItem = styled.div`
  a {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: all 0.4s;

    &:hover {
      opacity: 0.6;
    }
  }
`