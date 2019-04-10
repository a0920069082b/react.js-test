import React, { Component } from "react";

import "./css/Home.scss";
class Home extends Component {
  renderProduct(product) {
    console.log(product);
    return (
      <div key={product.id} className='productShow'>
      <img alt='product01_01.jpg' src={product.images[0]}/>
        <p>{product.name}</p>
        <p>{product.price}</p>
      </div>
    );
  }
  render() {
    return (
      <div className="Home">
        <p className="titleName">編輯嚴選</p>
        {this.props.products.map(x => this.renderProduct(x))}
        <p className="titleName">最近熱門</p>
        <p className="titleName">閱讀好設計</p>
        <p className="titleName">新品上架</p>
      </div>
    );
  }
}

export default Home;
