import React from 'react';

import { useParams } from 'react-router-dom';

const Article = () => {

  let { id } = useParams();

  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center title">
          <h1>Article {id}</h1>
        </div>
      </div>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
      <h3>ID: {id}</h3>
    </div>
  );
}

export default Article;