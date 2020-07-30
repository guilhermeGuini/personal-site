import React, { Component } from 'react';

import './Header.css'

class Header extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg">
          <div className="header-brand">
            <a className="navbar-brand" href="#"><img className="rounded-circle" src="https://via.placeholder.com/50"></img></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <span>Guilherme Guini</span>
          </div>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Article" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <div className="icons-header">
              <a href="#"><img alt="linkedin icon" width="36 px" src="/imgs/LI-In-Bug.png"></img></a>
              <a href="#"><img alt="github icon" src="/imgs/GitHub-Mark-32px.png"></img></a>
            </div>
          </div>

        </nav>
        <div className="row shadow-header"></div>
      </div>
    );
  }

}

export default Header;