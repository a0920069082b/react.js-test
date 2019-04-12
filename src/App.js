import React, { Component } from "react";
//引用Router相關套件
import { BrowserRouter as Router, Route } from "react-router-dom";

/* 引用Component */
//引用Header
import Header from "./components/Header";
//引用Footer
import Footer from "./components/Footer";

/* 引用Routes */
import Home from "./routes/Home";
import Product from "./routes/Product";
import ProductDetailed from "./routes/productDetailed";
import shoppingCart from "./routes/shoppingCart";
/* 引用ProductAPI */
import getProduct from "./servies/getProduct";

//樣式引入
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    };
    this.getProductList();
  }

  async getProductList() {
    const list = await getProduct.get();
    this.setState({ products: list });
  }

  renderProductDetailed(props) {
    return;
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route
            path="/"
            exact
            render={props => <Home {...props} products={this.state.products} />}
          />
          <Route path="/Product" component={Product} />
          <Route
            path="/productDetailed/:id"
            render={props => <ProductDetailed {...props} products={this.state.products} />}
          />
          <Route path="/shoppingCart" component={shoppingCart} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
