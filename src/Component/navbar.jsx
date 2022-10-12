import React, { Component } from "react";


class Navbar extends Component {

  render() {
    return (
      <nav className="navbar bg-secondary p-3">
        <div className="container-fluid ">
          <div className="navbar-brand mb-0 h1 text-white">Counters : <span className="badge bg-light text-black">{this.props.counterLength}</span></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
