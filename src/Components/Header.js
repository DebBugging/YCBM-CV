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
        <ul className="navbar-links">
          <li>
            <a
              href="https://drive.google.com/file/d/13wFMTUUrsy9DGUIui-nCg8Zkba1Gn1VC/view?usp=sharing"
              target="_blank"
            >
              Curriculum Vitae English
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Curriculum Vitae Español
            </a>
          </li>
          <li>
            <a href="http://www.lifecodeson.com/portfolio/" target="_blank">
              Portfolio-Life Codes On
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
