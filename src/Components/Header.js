import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="navbar" role="navigation">
        <a
          class="navbar-brand"
          href="http://www.lifecodeson.com/who-is-debs/"
          target="_blank"
          title="YouCanBook.Deborah"
        >
          <h1>YouCanBook.Deborah</h1>
        </a>
        <div className="navbar-buttons">
          <button>CV English</button>
          <button>CV Español</button>
          <button>Portfolio-Life Codes On</button>
        </div>
      </div>
    );
  }
}

export default Header;
