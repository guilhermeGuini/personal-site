import React from 'react';

import './ArticlePreview.css'
import Thumbnail from '../commons/Thumbnail'
import FeedbackIcons from '../commons/FeedbackIcons'

const ArticlePreview = (props) => {

  let articlePreview = props.data;

  return (
    <div className="article-preview">

      <div className="row">
        <div className="col-md-12">
          <h2 className="art-preview-title">{articlePreview.title}</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 art-tags">
          <span>8 de Junho 2020.</span>
          <span class="badge badge-secondary">Java 8</span>
          <span class="badge badge-secondary">OCA Certification</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-3 text-center">
          <Thumbnail srcImg={articlePreview.image} />
        </div>
        <div className="col-md-9 resume-text">
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
