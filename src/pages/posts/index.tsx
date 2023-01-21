import React from "react";
import { useAppSelector } from "../../store";
import { PostType } from "../../types/postType";
import { Loader, Post } from "../../components";

export const Posts = () => {
  const { userPosts, loading } = useAppSelector((state) => state.user);
  return loading ? (
    <Loader />
  ) : (
    <>
      {userPosts.map((post: PostType) => {
        return <Post key={post.id} item={{ ...post }} />;
      })}
    </>
  );
};
