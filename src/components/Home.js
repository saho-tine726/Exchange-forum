import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SWrapper } from "../styles/CommonStyles";
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

export const Home = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPostList(data.docs.map((doc) => {
        const postData = doc.data();
        return { ...postData, id: doc.id, createdAt: postData.createdAt.toDate() };
      }));
    };
    getPosts();
  }, []);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, 'posts', id));
    window.location.href = '/';
  };

  return (
    <SWrapper>
      <STitle>交流掲示板</STitle>
      <SList>
        {postList.map((post) => {
          const formattedDate = post.createdAt.toLocaleString('ja-JP', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
            timeZoneName: 'short'
          });
          return (
            <SItem key={post.id}>
              <SPostTitle>{post.title}</SPostTitle>
              <STextArea>{post.postsText}</STextArea>
              <SBottom>
                <SMeta>
                  <SDate>{formattedDate}</SDate>
                  <SName><span>written by</span>{post.author.username}</SName>
                </SMeta>
                {post.author.id === auth.currentUser?.uid && (
                  <SButton>
                    <button onClick={() => handleDelete(post.id)}>削除</button>
                  </SButton>
                )}
              </SBottom>
            </SItem>
          );
        })}
      </SList>
    </SWrapper>
  );
};

const SList = styled.div`
  margin: 20px 0 0;

  & > :first-child {
    margin-top: 0;
  }
`;

const SItem = styled.div`
  margin: 30px 0 0;
  padding: 20px;
  border: 1px solid #000;
`;

const STitle = styled.h1`
  text-align: center;
  font-size: 2.5rem;
`;

const SPostTitle = styled.h2`
  font-weight: bold;
`;

const STextArea = styled.div`
  margin: 5px 0 0;
`;

const SBottom = styled.div`
  margin: 10px 0 0;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const SMeta = styled.div`
  display: flex;
  gap: 5px 10px;
  flex-wrap: wrap;
  font-size: 0.8rem;
  color: gray;
`;

const SDate = styled.div``;

const SName = styled.div`
  display: flex;
  gap: 5px;

  & > span {
    flex-grow: 0;
    flex-shrink: 0;
  }
`;

const SButton = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  text-align: right;
`;
