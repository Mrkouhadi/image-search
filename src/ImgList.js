import React from "react";
import ImgCard from "./ImgCard";
import "./styles.css";

const ImgList = (props) => {
  const imgs = props.imgs.map((img) => {
    return <ImgCard key={img.id} img={img} />;
  });

  return <div className="ImgList"> {imgs} </div>;
};
export default ImgList;
