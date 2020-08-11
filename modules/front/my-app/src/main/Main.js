
import React from 'react';
import { Switch, Route, Redirect, Link } from "react-router-dom";

import './Main.css';

import ArticlesPreview from '../articles/ArticlesPreview';
import Article from '../articles/Article';

export default function Main() {

    const pathArticles = "/articles";

    const links = [{ filter: 'java', value: 'Java' },
                   { filter: 'csharp', value: 'C#' },
                   { filter: 'springboot', value: 'Spring Boot' },
                   { filter: 'hibernate', value: 'Hibernate' },
                   { filter: 'sql', value: 'SQL' },
                   { filter: 'plsql', value: 'PL-SQL' },
                   { filter: 'devops', value: 'Devops' }];

    return (
        <div className="container-fluid">
            <div className="shortcuts">
                <div className="shortcut-item">
                    <span>Tecnologias</span>
                    <ul>
                        {links.map(item => (
                            <li key={item.filter}>
                                <Link to={{pathname: pathArticles, search: "?q=" + item.filter}}>{item.value}</Link>
                            </li>
                        ))}
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
                    <Route path={pathArticles + "/:filter"}>
                        <ArticlesPreview />
                    </Route>
                    <Route path="/article/:id" component={Article} />
                </Switch>
            </div>
        </div >
    );
}