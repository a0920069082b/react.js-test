import React, { Component } from "react";
import { Link } from "react-router-dom";
//引入scss檔案
import "./css/Header.scss";
//引入Logo
import Logo from "../images/logo.png";
//引入購物車圖示
import shopping from "../images/shopping-cart.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ""
    };
  }

  render() {
    return (
      <div className="Header">
        <div className="headerLogo">
          <img className="headerLogoShow" alt="Logo" src={Logo} />
        </div>
        <div className="headerSearch">
          <div className="headerSearchValue">
            <input
              className="inputValue"
              type="text"
              value={this.state.inputValue}
              onChange={e => this.setState({ inputValue: e.target.value })}
            />
            <button className="searchBtn">搜尋</button>
          </div>
          <div className="headerSearchUl">
            <ul>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
              <li>1</li>
            </ul>
          </div>
        </div>
        <div className="headerFunction">
          { /* eslint-disable jsx-a11y/anchor-is-valid */ }
          <a href={"#"}>我要開設計館</a>
          <button className="loginBtn">登入/註冊</button>
          <Link to='/shoppingCart'>
            <img
              className="shoppingIcon"
              alt="購物車"
              title="購物車"
              src={shopping}
            />
          </Link>
        </div>
        <div className="headerMenu">
          <ul>
            <li>
              <Link  className="pageName" to="/">
                主打活動
              </Link>
            </li>
            <li>
              <Link  className="pageName" to="/Product">
                配件飾品
              </Link>
            </li>
            <li>
              <Link className="pageName" to="/Product">
                居家生活
              </Link>
            </li>
            <li>
              <Link  className="pageName" to="/Product">
                包包提袋
              </Link>
            </li>
            <li>
              <Link className="pageName" to="/Product">
                衣著良品
              </Link>
            </li>
            <li>
              <Link className="pageName" to="/Product">
                文具卡片
              </Link>
            </li>
            <li>
              <Link className="pageName" to="/Product">
                體驗活動
              </Link>
            </li>
            <li>
              <Link  className="pageName" to="/Product">
                所有分類
              </Link>
            </li>
            <li>
              <Link  className="pageName" to="/Product">
                探索更多
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
