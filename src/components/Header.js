import React, { Component } from "react";
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
          <a href={"#"}>我要開設計館</a>
          <button className='loginBtn'>登入/註冊</button>
          <a href={'#'}><img className='shoppingIcon' alt='購物車' title='購物車' src={shopping}/></a>
        </div>
        <div className='headerMenu'>
          <ul>
            <li>主打活動</li>
            <li>配件飾品</li>
            <li>居家生活</li>
            <li>包包提袋</li>
            <li>衣著良品</li>
            <li>文具卡片</li>
            <li>體驗活動</li>
            <li>所有分類</li>
            <li>探索更多</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Header;
