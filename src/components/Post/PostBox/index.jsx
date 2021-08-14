import React, { useContext } from "react";
import { PostContext } from "../../../contexts/PostContext";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

PostBox.propTypes = {
  data: PropTypes.object,
};

function PostBox({ data }) {
  const history = useHistory();
  const { removePost, getPostFromId } = useContext(PostContext);
  const post = getPostFromId(data.id);
  const hanleEdit = () => {
    history.push(`/post/${post.id}`);
  };

  return (
    <div className="post-box">
      <div className="post__top">
        <a href="#" className="post__username">
          {data.username}
        </a>
        <div>
          <button onClick={hanleEdit} className="btn">
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
    </div>
  );
}

export default PostBox;
