import React, { Component } from "react";
import "./Product.css";
export default class App extends Component {
  state = {
    name: "",
    email: "",
    sifre: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
  }; 
  handleChange = (e) => {
    this.setState({name: e.target.name});
}
  render() {
    return (
      <div className="cont">
          <form action="" onSubmit={this.handleSubmit}>
            <label htmlFor="Ad">
              Ad :<input type="text" name="name" id="ad" onChange={this.handleChange}/>
            </label>
            <br />
            <label htmlFor="email">
              Email :<input type="email" name="email" id="email" />
            </label>
            <br />
            <label htmlFor="sifre">
              Sifre :<input type="password" name="sifre" id="sifre" />
            </label>
            <button type="submit" disabled={this.state.isValid}>Gonder</button>
          </form>
        </div>
    );
  }
}
