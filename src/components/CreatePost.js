import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { SWrapper } from '../styles/CommonStyles';
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

export const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid
      },
      createdAt: Timestamp.now()
    })

    navigate('/');
  }

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  }, []);

  return (
    <SWrapper>
      <div className="postContainer">
        <STitle>投稿する</STitle>
        <SList>
          <SItem>
            <SItemName>タイトル</SItemName>
            <SItemInputArea>
              <input type="text" placeholder="タイトルを記入" onChange={(e) => setTitle(e.target.value)} />
            </SItemInputArea>
          </SItem>
          <SItem>
            <SItemName>内容</SItemName>
            <SItemInputArea>
              <textarea placeholder="投稿する内容を記入してください。" onChange={(e) => setPostText(e.target.value)}></textarea>
            </SItemInputArea>
          </SItem>
        </SList>
        <SButton>
          <button onClick={createPost}>投稿する</button>
        </SButton>
      </div>
    </SWrapper>
  )
};

const STitle = styled.h1`
  
`
const SList = styled.div`
  margin: 20px 0 0;

  & > :first-child {
    margin-top: 0;
  }
`

const SItem = styled.div`
  margin: 20px 0 0;
`
const SItemName = styled.h2`
  
`
const SItemInputArea = styled.div`
  margin: 5px 0 0;
`
const SButton = styled.div`
  margin: 20px 0 0;

  & > button {
    font-size: 1.1rem;
    padding: 5px 10px;
  }
`