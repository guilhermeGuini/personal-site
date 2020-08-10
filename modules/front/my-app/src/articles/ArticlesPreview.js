import React, { useState, useEffect } from 'react';

import { Route, useHistory, useParams } from 'react-router-dom';

import ArticlePreview from './ArticlePreview';

const ArticlePreviews = () => {

    const history = useHistory();
    const location = history.location;
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [filters, setFilters] = useState('');
    const [items, setItems] = useState([]);

    console.log(isLoaded + "-" + location.search + "-" + filters);
    console.log(isLoaded === true && location.search !== filters);

    if (isLoaded === true && location.search !== filters) {
        console.log('ok');
        loadArticles();
    }

    useEffect(() => {
        loadArticles();
    }, [])

    function loadArticles() {
        fetch("http://localhost:8000/articles" + (location.search ? "?" + location.search : ''))
            .then(res => res.json())
            .then((result) => {
                setFilters(location.search);
                setIsLoaded(true);
                setItems(result.articles);
            }, (error) => {
                setFilters(location.search);
                setIsLoaded(true);
                setError(error);
            })
    }

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

