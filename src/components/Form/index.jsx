import React, { useContext, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";

Form.propTypes = {};

function Form({ id }) {
  //load context
  const { editPost, addPost, getPostFromId } = useContext(PostContext);

  const nameInput = useRef(null);
  const contentInput = useRef(null);

  const history = useHistory();

  useEffect(() => {
    if (id !== "add") {
      const post = getPostFromId(id);
      if (post && nameInput.current && contentInput.current) {
        nameInput.current.value = post.username;
        contentInput.current.value = post.content;
      }
    }
  }, [id]);

  const hanleSubmit = (event) => {
    event.preventDefault();
    let username = nameInput.current.value;
    let content = contentInput.current.value;
    if (nameInput.current && nameInput.current.value) {
      if (id !== "add") {
        editPost(id, username, content);
      } else {
        addPost(username, content);
      }
    }
    history.push("/posts");
  };

  return (
    <div className="new-post">
      <form onSubmit={hanleSubmit}>
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
        <button className="btn">Đăng bài</button>
      </form>
    </div>
  );
}

export default Form;
