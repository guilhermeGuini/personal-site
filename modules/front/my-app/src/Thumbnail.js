import React from 'react';

import './Thumbnail.css'

class Thumbnail extends React.Component {

  constructor(props) {
    super(props);
    this.srcImg = props.srcImg;
  }

  render() {
    return (
      <figure className="thumbnail">
        <img src={this.srcImg} alt="Img" />
        <figcaption className="figure-caption">A caption for the.</figcaption>
      </figure>
    );
  }

}

export default Thumbnail;