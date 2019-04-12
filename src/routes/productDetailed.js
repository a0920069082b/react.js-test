import React, { Component } from "react";
import UseLocalstorage from "../components/useLocalstorage";
import "./css/productDetailed.scss";
import order from "../images/shopping-cart.png";
class productDetailed extends Component {
  useLocalstorage = new UseLocalstorage();
  constructor(props) {
    super(props);
    this.state = {
      orderNumber: 0,
      orderList: []
    };
    
  }

  numberChange(e) {
    if (e.target.value < 0) this.setState({ orderNumber: 0 });
    else this.setState({ orderNumber: e.target.value });
  }
  addProductOrder() {
    if(this.state.orderNumber === 0){
      alert('商品訂購數量不可為0');
      return;
    }
    if (this.useLocalstorage.getItem("orderList")) {
      this.setState({ orderList: this.useLocalstorage.getJSONItem("orderList") },()=>this.addLocalstorage());
    }else{
      this.addLocalstorage();
    }
    
  }

  addLocalstorage(){
    let jsonObj =this.state.orderList;
    let orderObj = {};
    if (Object.keys(jsonObj).length === 0) orderObj.id = 0;
    else orderObj.id = jsonObj.length;
    orderObj.productId = this.p.id;
    orderObj.productName = this.p.name;
    orderObj.productCount= this.state.orderNumber;
    orderObj.productPrice = this.p.price;
    jsonObj.push(orderObj);
    this.setState({ orderList: jsonObj });
    this.useLocalstorage.setJSONItem("orderList",this.state.orderList);
    alert('已經此產品加入購物車');
    this.props.history.push(`/shoppingCart`);
  }

  render() {
    this.id = this.props.match.params.id;
    this.p = this.props.products.find(p => p.id === Number(this.id));
    if (this.p===undefined){
      return(<div></div>);
    }
    return (
      <div className="productDetailed">
        <div className="group">
          <div className="group-img">
            <img
              alt={this.p.name}
              src={this.p.images[0]}
              style={{ width: "500px", height: "500px" }}
            />
          </div>
          <div className="group-detail">
            <h1>
              {this.p.name}
            </h1>
            <div className="productPrice">
              產品單價：{this.p.price}
            </div>
            <div className="productOrder">
              <p>數量</p>
              <input
                className="orderNumber"
                type="number"
                value={this.state.orderNumber}
                onChange={e => this.numberChange(e)}
              />
              <br />
              <button
                className="orderBtn"
                onClick={() => this.addProductOrder()}
              >
                <img alt="放入購物車" className="orderImg" src={order} />放入購物車
              </button>
            </div>
            <div>
              產品明細：{this.p.detailed.split("\n").map((item, key) => {
                return (
                  <span key={key}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default productDetailed;
