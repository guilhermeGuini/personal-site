
import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import './Main.css';

import ArticlesPreview from '../articles/ArticlesPreview';
import Article from '../articles/Article';
import PageNotFound from '../commons/PageNotFound';

export default function Main() {

    const pathArticles = "/articles";

    return (
        <div className="container">
            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Redirect to={pathArticles} />
                    </Route>
                    <Route exact path={pathArticles}>
                        <ArticlesPreview />
                    </Route>
                    <Route path={pathArticles + "/:id"} component={Article} />
                    <Route path="/page_not_found">
                        <PageNotFound />
                    </Route>
                    <Redirect to="/page_not_found" />
                </Switch>
            </div>
        </div>
    );
}