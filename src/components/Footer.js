import React, { Component } from "react";
//引用Footer樣式
import "./css/Footer.scss";
//引用Logo
import Logo from "../images/logo.png";
//引用地球Icon
import Earth from "../images/grid-world.png";

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <hr />
        <div className="footerLogo">
          <img alt="logo" title="logo" src={Logo} className="footerLogoShow" />
        </div>
        <div className="footerSlogan">
          <label>用好設計實現美感生活</label>
        </div>
        <div className="footerContext">
          <footer>
            <p>© 2019 Pinkoi. All Rights Reserved.</p>
          </footer>
          <img className="Earth" alt="Earth" title="Earth" src={Earth} />
          <label>繁體中文(臺灣)</label>
        </div>
      </div>
    );
  }
}

export default Footer;
