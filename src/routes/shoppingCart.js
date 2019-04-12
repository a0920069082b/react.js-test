import React, { Component } from "react";
import UseLocalstorage from "../components/useLocalstorage";
import "./css/shoppingCart.scss";
class shoppingCart extends Component {
  useLocalstorage = new UseLocalstorage();
  sum = 0;
  renderOrderDetailed() {
    const orderList = this.useLocalstorage.getJSONItem("orderList");
    return orderList.map(x => this.showOrderDetailed(x));
  }
  showOrderDetailed(product) {
    return (
      <tr key={product.id}>
        <td>
          {product.id}
        </td>
        <td>
          {product.productId}
        </td>
        <td>
          {product.productName}
        </td>
        <td>
          {product.productPrice}
        </td>
        <td>
          {product.productCount}
        </td>
        <td>
          NT${this.calculationSumePrice(product.productPrice,product.productCount)}
        </td>
      </tr>
    );
  }

  calculationSumePrice(price,count){
    const money = price.split("$");
    let Sum =(parseInt( money[1].replace(/,/,"")) * parseInt(count)).toString();
    this.sum+=parseInt(Sum);
    return Sum.replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1,");
  }

  render() {
    return (
      <div className="shoppingCart">
        <table className="orderTable">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>產品編號</th>
              <th>產品名稱</th>
              <th>產品單價</th>
              <th>訂購數量</th>
              <th>總價</th>
            </tr>
          </thead>
          <tbody>
            {this.renderOrderDetailed()}
          </tbody>
        </table>
        <p className='sumPrice'>總金額為：NT${this.sum.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1,")}</p>
      </div>
    );
  }
}

export default shoppingCart;
