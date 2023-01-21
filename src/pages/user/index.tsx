import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { useNavigate } from "react-router";
import { getUserPosts } from "../../store/slices/userSkice";
import { Loader, Modal } from "../../components";

import "./user.css";

export const User = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user, loading, userAlbums } = useAppSelector((state) => state.user);
  const [open, setOpen] = React.useState<boolean>(false);

  const showPosts = () => {
    dispatch(getUserPosts());
    navigate(`/posts`);
  };

  const openModal = () => {
    setOpen(!open);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className={"user"}>
      <p>Name:{user.name}</p>
      <p>Username:{user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone number: {user.phone}</p>
      <div className={"user__buttons"}>
        <button className={"buttons__show"} onClick={showPosts}>
          show user posts
        </button>
        <button className={"buttons__show"} onClick={openModal}>
          show user albums
        </button>
      </div>
      {open && <Modal close={openModal} albums={userAlbums} />}
    </div>
  );
};
