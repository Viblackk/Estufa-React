import React, { Component } from "react";
import './dashboard.css'
import axios from 'axios';

class Dashboard extends Component {
state = {
    products:[]
}

  componentDidMount() {
    this.loadClimate();
  }

loadClimate = async() => {
  axios.get("http://api.openweathermap.org/data/2.5/weather?lat=-20.2826&lon=-50.2501&cnt=1&appid=8f21c9e57d78e43ff6bfdabe7004f069")
  .then(res => {
    const products = res.data;
    this.setState({ products });
  })
 
}
  render() {
    const { products } = this.state;
    console.log(products);
    return (
      <>
      <div className="sidebar">
        <a className="active" href="#home">Home</a>
        <a href="#news">Zéca pagodinho</a>
        <a href="#contact">Péricles</a>
        <a href="#about">Xand</a>
      </div>
      <div className="container">
        <div className="card-climate">
          <div className="card-body">
            <h2> {this.state.products.name} </h2>
        
         </div>
        </div>
        
       </div>
      </>
    );
  }
}
export default Dashboard;
