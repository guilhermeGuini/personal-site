import React from 'react';

import { useHistory } from 'react-router-dom';

import './Header.css'

import Image from './commons/Image';

export default function Header() {

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    let filter = document.getElementById('input-search').value;

    document.getElementById('input-search').value='';

    if (filter && filter.length > 0) {
      history.push(`/articles?q=${filter}`);
    } else {
      history.push(`/articles`);
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="header-brand">
          <a className="navbar-brand" href="#"><img className="rounded-circle" src="https://via.placeholder.com/50"></img></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <span className="personal-name font-effect-3d-float">Guilherme Guini</span>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0" onSubmit={handleSubmit} noValidate>
            <input id="input-search" className="form-control mr-sm-2" type="search" placeholder="Filtro" aria-label="Search" />
            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
          <div className="icons-header">
            <a href="https://www.linkedin.com/in/guilherme-silva-guini-86613bb2/" target="blank">
              <Image alt="linkedin icon" src="/imgs/LI-In-Bug.png" srcOver="/imgs/LI-In-Bug-Inverse.png" />
            </a>
            <a href="https://github.com/guilhermeGuini" target="blank">
              <Image alt="linkedin icon" src="/imgs/GitHub-Mark-32px.png" srcOver="/imgs/GitHub-Mark-Inverse-32px.png" />
            </a>
          </div>
        </div>

      </nav>
      <div className="shadow-header"></div>
    </div>
  );

}