import React from 'react';

class Image extends React.Component {

  constructor(props) {
      super(props);
      this.src = props.src;
      this.srcOver = props.srcOver;
      this.changeSourceImg = this.changeSourceImg.bind(this);
  }

  changeSourceImg(e) {
    if (e.type === 'mouseover') {
        e.target.src = this.srcOver;
    } else if (e.type === 'mouseout') {
        e.target.src = this.src;
    }
  }

  render() {
    return (
        <img alt="linkedin icon" width="36 px" src={this.src}
             onMouseOver={this.changeSourceImg}
             onMouseOut={this.changeSourceImg} />
    );
  }

}

export default Image;