import React from "react";
import { useParams } from "react-router";
import Form from "../../components/Form";

function AddPost(props) {
  const { id } = useParams();
  return <Form id={id} />;
}

export default AddPost;
