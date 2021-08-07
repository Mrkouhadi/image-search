import React from "react";
import "./styles.css";

export default class imgCard extends React.Component {
  imgRef = React.createRef();
  render() {
    const { description, urls } = this.props.img;
    return (
      <div className="ImgCard">
        <img
          className="Img"
          ref={this.imgRef}
          alt={description}
          src={urls.regular}
        />
      </div>
    );
  }
}
