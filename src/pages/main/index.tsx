import React from "react";
import axios from "axios";
import { UserType } from "../../types/userType";
import { usersUrl } from "../../static/urls";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store";
import {
  getUser,
  getUserAlbums,
  getUserPosts,
} from "../../store/slices/userSkice";

import "./main.css";

const getUsers = async () => {
  return await axios.get(usersUrl);
};

export const Main = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [users, setUsers] = React.useState<UserType[]>([]);

  React.useEffect(() => {
    getUsers().then((res) => setUsers(res.data));
  }, []);

  const openUser = (id: number) => {
    dispatch(getUser(id));
    dispatch(getUserAlbums());
    navigate(`/user/${id}`);
  };
  return (
    <div className={"main"}>
      <ul className={"mail__list"}>
        {users.map((user, i) => {
          return (
            <li
              key={user.id}
              className={"list__item"}
              onClick={() => openUser(user.id)}
            >
              {i + 1}. {user.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
