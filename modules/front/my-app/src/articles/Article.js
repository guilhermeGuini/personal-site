import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import './Article.css';

const Article = () => {

  let { id } = useParams();

  const [error, setError] = useState(null);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/articles/" + id)
      .then(res => res.json())
      .then((result) => {
        setArticle(result.article);
      }, (error) => {
        setError(error);
      })

  }, [id])

  return (
     <div dangerouslySetInnerHTML={{ __html: article.content }} />
  );
}

export default Article;