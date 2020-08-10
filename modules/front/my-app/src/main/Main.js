
import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";

import './Main.css';

import ArticlesPreview from '../articles/ArticlesPreview';
import Article from '../articles/Article';

export default function Main() {

    const pathArticles = "/articles";

    return (
        <div className="container-fluid">
            <div className="shortcuts">
                <div className="shortcut-item">
                    <span>Tecnologias</span>
                    <ul>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=java" }}>Java</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=csharp" }}>C#</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=springboot" }}>Spring Boot</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=hibernate" }}>Hibernate</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=sql" }}>SQL</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=plsql" }}>PL-SQL</Link>
                        </li>
                        <li>
                            <Link to={{ pathname: pathArticles, search: "?q=devops" }}>Devops</Link>
                        </li>
                    </ul>
                </div>
                <div className="shortcut-item">
                    <span>Autores</span>
                    <ul>
                        <li><Link to={{ pathname: pathArticles, search: "?author=guini" }}>Guilherme Guini</Link></li>
                    </ul>
                </div>
            </div>

            <div className="content">
                <Switch>
                    <Route exact path="/">
                        <Redirect to={pathArticles} />
                    </Route>
                    <Route exact path={pathArticles}>
                        <ArticlesPreview />
                    </Route>
                    <Route path="/article/:id" component={Article} />
                </Switch>
            </div>
        </div >
    );
}