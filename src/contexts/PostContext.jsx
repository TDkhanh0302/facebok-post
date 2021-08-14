import React, { createContext, useState } from "react";

export const PostContext = createContext();

const PostContextProvider = ({ children }) => {
  //state
  const commentData = [
    {
      id: 0,
      postid: 0,
      text: "comment 1",
    },
    {
      id: 1,
      postid: 0,
      text: "comment 2",
    },
    {
      id: 2,
      postid: 2,
      text: "comment post 3",
    },
  ];

  const postsData = [
    {
      id: 0,
      username: "Bao Khanh",
      content:
        "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, ",
    },
    {
      id: 1,
      username: "Duc Duy",
      content:
        "Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, Lorem ipsum dolor sit amet consectetur, ",
    },
  ];
  const [postList, setPostList] = useState(postsData);

  var newPostsList = [...postList];

  const editPost = (id, username, content) => {
    const index = id;
    newPostsList[index].username = username;
    newPostsList[index].content = content;

    setPostList(newPostsList);
  };

  const addPost = (username, content) => {
    const id = newPostsList.length;
    newPostsList.push({ id, username, content });

    setPostList(newPostsList);
  };

  const removePost = (data) => {
    newPostsList = [...postList];
    const newState = newPostsList.filter((item) => {
      return item.id !== data.id;
    });
    setPostList(newState);
  };

  const getPostFromId = (id) => {
    return postList.find((post) => post.id == id);
  };

  const postContextData = {
    commentData,
    postList,
    editPost,
    addPost,
    removePost,
    getPostFromId,
  };

  //return
  return (
    <PostContext.Provider value={postContextData}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
