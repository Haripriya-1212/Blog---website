import React, { useEffect, useState } from 'react';
import Blogpost from '../component/Blogpost';
// import { response } from 'express';

export default function () {
  const [posts, setPosts] = useState([]);
  useEffect(
    () => {
      // default method is get
      fetch('http://localhost:4000/post').then(response => {
        response.json().then(posts => {
          console.log(posts);
          setPosts(posts);
        });
      });
    }, [])
  return (
    <>
    {posts.length>0 && posts.map(post => (<Blogpost {...post}/>))}
    </>
  );
}
