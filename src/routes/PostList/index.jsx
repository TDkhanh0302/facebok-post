import React from "react";
import Post from "../../components/Post";
import { useHistory } from "react-router";

PostList.propTypes = {};

function PostList(props) {
  const history = useHistory();

  const onAdd = () => {
    history.push("/post/add");
  };

  return (
    <>
      <button onClick={onAdd} className="btn btn--white">
        Thêm bài viết mới
      </button>
      <Post />
    </>
  );
}

export default PostList;
