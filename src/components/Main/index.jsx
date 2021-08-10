import React, { useState } from "react";
import { useRef } from "react";
import "./styles.css";

Main.propTypes = {};

function Main(props) {
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
      postid: 1,
      text: "comment 3",
    },
  ];

  var newPostsList = [];

  const [postList, setPostList] = useState(postsData);
  const [textButton, setTextButton] = useState("Đăng bài");

  const idInput = useRef(null);
  const nameInput = useRef(null);
  const contentInput = useRef(null);

  const editPost = (data) => {
    idInput.current.value = data.id;
    nameInput.current.value = data.username;
    contentInput.current.value = data.content;
    setTextButton("Cập nhật");
  };

  const addPost = (event) => {
    event.preventDefault();
    let id = idInput.current.value;
    let username = nameInput.current.value;
    let content = contentInput.current.value;
    newPostsList = [...postList];

    if (id && username && content && !!newPostsList.length) {
      const index = id;
      newPostsList[index].username = username;
      newPostsList[index].content = content;

      setPostList(newPostsList);
    } else if (username && content) {
      const id = newPostsList.length;
      newPostsList.push({ id, username, content });

      setPostList(newPostsList);
    }

    idInput.current.value = "";
    nameInput.current.value = "";
    contentInput.current.value = "";
    setTextButton("Đăng bài");
  };

  const removePost = (data) => {
    newPostsList = [...postList];
    const newState = newPostsList.filter((item) => {
      return item.id !== data.id;
    });
    setPostList(newState);
  };

  var commentByPostid = [];
  const getCommentByPostid = (id) => {
    commentByPostid = commentData.filter((item) => {
      return item.postid === id;
    });
    console.log(commentByPostid);
  };

  return (
    <div className="main">
      <div className="new-post">
        <h3>Tạo bài viết mới</h3>
        <form onSubmit={addPost}>
          <input type="hidden" ref={idInput} />
          <input
            type="text"
            ref={nameInput}
            name="username"
            className="input"
            id="input-name"
            placeholder="Username"
          />
          <input
            type="text"
            ref={contentInput}
            name="content"
            className="input input--full"
            placeholder="Bạn đang nghĩ gì..."
          />
          <button className="btn">{textButton}</button>
        </form>
      </div>

      {postList.map((data) => (
        <div
          onLoad={getCommentByPostid(data.id)}
          key={data.id}
          className="post"
        >
          <div className="post__top">
            <a href="#" className="post__username">
              {data.username}
            </a>
            <div>
              <button onClick={() => editPost(data)} className="btn">
                Sửa
              </button>
              <button onClick={() => removePost(data)} className="btn">
                Xóa
              </button>
            </div>
          </div>

          <div className="post__content">
            <p>{data.content}</p>
          </div>

          <div className="reaction">
            <a href="#">
              <i className="far fa-thumbs-up"></i>
              Thích
            </a>
            <a href="#">
              <i className="far fa-comment-alt"></i>
              Bình luận
            </a>
          </div>

          <div className="comment">
            {commentByPostid.map((comment) => (
              <div key={comment.id} className="comment__row">
                <input
                  type="text"
                  className="input input-comment"
                  value={comment.text}
                  readOnly
                />
                <div>
                  <button className="btn">Sửa</button>
                  <button className="btn">Xóa</button>
                </div>
              </div>
            ))}
            <form action="">
              <input
                type="text"
                name="comment"
                className="input input--full"
                placeholder="Viết bình luận..."
              />
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Main;
