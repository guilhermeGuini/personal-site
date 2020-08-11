import React from 'react';

import './ArticlePreview.css'
import Thumbnail from '../commons/Thumbnail'
import FeedbackIcons from '../commons/FeedbackIcons'

const ArticlePreview = (props) => {

  let articlePreview = props.data;

  return (
    <div className="article-preview">

      <div className="row">
        <div className="col-md-2 text-center">
          <Thumbnail srcImg={articlePreview.image} />
        </div>
        <div className="col-md-10 resume-text">
          <div className="row">
            <div className="col-md-12">
              <h2>{articlePreview.title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {articlePreview.description}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 feedback-icons">
              <FeedbackIcons data={articlePreview.socialFeedback} />
            </div>
          </div>
        </div>
      </div>
      <hr />


    </div>
  );
};

export default ArticlePreview;
