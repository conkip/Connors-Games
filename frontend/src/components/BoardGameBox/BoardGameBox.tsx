import React from "react";
import './BoardGameBox.module.css'

interface BoardGameBoxProps {
  frontImg: string;
  backText: string;
  title?: string;
}

const BoardGameBox: React.FC<BoardGameBoxProps> = ({ frontImg, backText, title }) => {
  return (
    <div className="box-container">
      <div className="box">
        <div className="box-front">
          <img src={frontImg} alt={title || "Board game cover"} />
          {title && <h3 className="box-title">{title}</h3>}
        </div>
        <div className="box-back">
          <p>{backText}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardGameBox;
