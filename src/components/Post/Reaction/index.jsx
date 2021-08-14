import React from "react";

Reaction.propTypes = {};

function Reaction(props) {
  return (
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
  );
}

export default Reaction;
