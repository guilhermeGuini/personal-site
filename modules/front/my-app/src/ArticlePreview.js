import React from 'react';

import './ArticlePreview.css'

import Thumbnail from './Thumbnail'
import FeedbackIcons from './FeedbackIcons'

class ArticlePreview extends React.Component {

  constructor(props) {
    super(props);
    this.srcImg = props.srcImg;
    this.text = props.text;
  }

  render() {
    return (
      <div className="article-preview">
        <div className="row">
          <div className="col-2">
            <Thumbnail srcImg={this.srcImg} />
          </div>
          <div className="col-9 resume-text">
            <div>{this.text}</div>
            <div className="feedback-icons">
              <FeedbackIcons />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default ArticlePreview;
