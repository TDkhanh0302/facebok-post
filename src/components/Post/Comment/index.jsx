import React, { useContext } from "react";
import PropTypes from "prop-types";
import { PostContext } from "../../../contexts/PostContext";

Comment.propTypes = {
  data: PropTypes.object,
};

function Comment({ data }) {
  //load context
  const { commentData } = useContext(PostContext);

  return (
    <div className="comment">
      {commentData.map((item) => {
        if (item.postid === data.id) {
          return (
            <div key={item.id} className="comment__row">
              <input
                type="text"
                className="input input-comment"
                value={item.text}
                readOnly
              />
              <div>
                <button className="btn">Sửa</button>
                <button className="btn">Xóa</button>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      <form action="">
        <input
          type="text"
          name="comment"
          className="input input--full"
          placeholder="Viết bình luận..."
        />
      </form>
    </div>
  );
}

export default Comment;
