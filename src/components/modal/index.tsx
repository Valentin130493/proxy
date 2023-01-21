import React from "react";

import "./modal.css";
import { AlbumsTypes } from "../../types/albumsTypes";

interface ModalProps {
  close: () => void;
  albums: AlbumsTypes[];
}

export const Modal: React.FC<ModalProps> = ({ close, albums }) => {
  return (
    <div className="modal__background">
      <div className="modal__box">
        <ul className={"box__albums"}>
          {albums.map((album, i) => {
            return (
              <li key={album.id} className={"albums__item"}>
                {i + 1}. {album.title}
              </li>
            );
          })}
        </ul>
        <button onClick={close} className="box__close">
          X
        </button>
      </div>
    </div>
  );
};
