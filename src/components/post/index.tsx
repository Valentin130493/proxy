import React from "react";

import "./post.css";

interface PostPropsType {
  item: {
    title: string;
    body: string;
  };
}

export const Post: React.FC<PostPropsType> = ({ item }) => {
  return (
    <div className={"post"}>
      <h2 className={"post__title"}>Post title: {item.title}</h2>
      <p className={"post__text"}>{item.body}</p>
    </div>
  );
};
