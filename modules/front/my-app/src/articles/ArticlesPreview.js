import React, { useState, useEffect } from 'react';

import { Route, useHistory, useParams, useLocation } from 'react-router-dom';

import ArticlePreview from './ArticlePreview';

const ArticlePreviews = () => {

    let location = useLocation();

    const history = useHistory();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    const urlParams = new URLSearchParams(location.search);

    useEffect(() => {
        fetch("http://localhost:8000/articles" + (location.search ? location.search : ''))
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setItems(result.articles);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })
    }, [location])

    function loadMoreArticles(e) {
        console.log(e);
    }

    return (
        
        <Route
            path="/articles"
            exact
            render={() => {
                return (
                    <div>
                        <div className="row">
                            <div className="col-md-12 text-center title">
                                <h1>Articles</h1>
                                {
                                    urlParams.getAll.length > 0 && urlParams.has('q') ?
                                    <span>{'#' + urlParams.get('q')}</span> :
                                    undefined
                                }
                                {
                                    urlParams.getAll.length > 0 && urlParams.has('author') ?
                                    <span>{'#' + urlParams.get('author')}</span> :
                                    undefined
                                }
                            </div>
                        </div>
                        <div className="article-preview">
                            {items.map(item => (
                                <div role="link" key={item.id} onClick={() => history.push(`/article/${item.id}`)}>
                                    <ArticlePreview className="article-preview" data={item} />
                                </div >
                            ))}
                        </div>
                    </div>
                )
            }}
        />
    );
};

export default ArticlePreviews;

