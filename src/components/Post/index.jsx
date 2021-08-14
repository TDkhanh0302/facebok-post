import React, { useContext } from "react";
import { PostContext } from "../../contexts/PostContext";
import PostBox from "./PostBox";
import Reaction from "./Reaction";
import Comment from "./Comment";

function Post(props) {
  //load context
  const { postList } = useContext(PostContext);

  return (
    <>
      {postList.map((data) => (
        <div key={data.id} className="post">
          <PostBox data={data} />

          <Reaction />

          <Comment data={data} />
        </div>
      ))}
    </>
  );
}

export default Post;
