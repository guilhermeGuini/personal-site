import React, { useState, useEffect } from 'react';

import { Route, useHistory, useLocation } from 'react-router-dom';

import ArticlePreview from './ArticlePreview';
import GenericNotFound from '../commons/GenericNotFound';

import './ArticlesPreview.css';

const ArticlePreviews = () => {

    let location = useLocation();

    const history = useHistory();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [articles, setArticles] = useState([]);

    const urlParams = new URLSearchParams(location.search);

    useEffect(() => {
        fetch("http://localhost:8000/articles" + (location.search ? location.search : ''))
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setArticles(result.articles);
            }, (error) => {
                setIsLoaded(true);
                setError(error);
            })

    }, [location])

    return (

        <Route
            path="/articles"
            exact
            render={() => {
                return (
                    <div>
                        <div className="articles-preview">
                            <div className="row">
                                <div className="col-md-12 text-center title">
                                    <h1>Artigos</h1>
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
                                {
                                    articles.length == 0 ?
                                        <GenericNotFound msg="Nenhum artigo foi encontrado!"/> :
                                        articles.map(article => (
                                            <div role="link" key={article.id} onClick={() => history.push(`/articles/${article.id}`)}>
                                                <ArticlePreview className="article-preview" data={article} />
                                            </div >
                                        ))}
                            </div>
                        </div>
                    </div>
                )
            }}
        />
    );
};

export default ArticlePreviews;

