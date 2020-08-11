import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

const Article = () => {

  let { id } = useParams();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/articles/article/" + id)
      .then(res => res.json())
      .then((result) => {
        console.log('ok article');
        setIsLoaded(true);
        setItems(result.articles);
      }, (error) => {
        console.log('nok article');
        setIsLoaded(true);
        setError(error);
      })
  }, [id])

  return (
    <div>
      <div className="row">
        <div className="col-md-12 text-center title">
          <h1>{id}</h1>
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