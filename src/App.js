import React, { Component } from "react";
//引用Router相關套件
import { BrowserRouter as Router, Route } from "react-router-dom";

/* 引用Component */
//引用Header
import Header from "./components/Header";
//引用Footer
import Footer from "./components/Footer";

/* 引用Routes */
import Home from './routes/Home';
import Product from './routes/Product';
import productDetailed from './routes/productDetailed';
import shoppingCart from './routes/shoppingCart';


//樣式引入
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          <Footer />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
