import React from "react";

const Nav = props => (
  <div>
    <nav className="navbar  navbar-inverse navbar-dark bg-dark" >
      <ul className="nav navbar-nav navbar-left">
        <li>
          <a href="/" class="text-secondary" >
          Books Search
          </a>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a href="/savedbooks" class="text-secondary">
            Saved Books
          </a>
        </li>
      </ul>
    </nav>
  </div>
);

export default Nav;
