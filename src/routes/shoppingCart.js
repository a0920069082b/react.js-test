import React, { Component } from "react";
import UseLocalstorage from "../components/useLocalstorage";
import "./css/shoppingCart.scss";
class shoppingCart extends Component {
  useLocalstorage = new UseLocalstorage();
  sum = 0;
  renderOrderDetailed() {
    // 當購物車沒有東西的時候會是 null，null 不可執行 map，會死掉。
    // 但我後面多個 || []，用來表示 前面如果是 false，就會取代成空陣列
    // ps. null == false 是成立的
    const orderList = this.useLocalstorage.getJSONItem("orderList") || [];
    return orderList.map(x => this.showOrderDetailed(x));
  }
  showOrderDetailed(product) {
    // 這些 td 就寫一行就好了
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.productId}</td>
        <td>{product.productName}</td>
        <td>{product.productPrice}</td>
        <td>{product.productCount}</td>
        <td>
          NT${this.calculationSumePrice(product.productPrice, product.productCount)}
        </td>
      </tr>
    );
  }

  calculationSumePrice(price, count) {
    const money = price.split("$");
    let Sum = (parseInt(money[1].replace(/,/, "")) * parseInt(count)).toString();
    this.sum += parseInt(Sum);
    // 三位一撇，金蓋秋。
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
        { /** jsx 屬性最好使用雙引號 */}
        <p className="sumPrice">總金額為：NT${this.sum.toString().replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1,")}</p>
      </div>
    );
  }
}

export default shoppingCart;
