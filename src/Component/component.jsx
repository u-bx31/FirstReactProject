import React, { Component } from "react";

class Counter extends Component {

  
  getEvent(event) {
    var target = event.target.value;

    this.setState({
      prod: target,
    });
  }

  getClassColorBadge() {
    let classes = "fs-5 m-2 badge rounded-pill text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";

    return classes;
  }

  render() {
    // const products = this.props.counter.lsProd.map((i) => {
    //   return <li>{i}</li>;
    // });
    const {counter , onDelete , onIncrement} = this.props;
    return (
      
      <div>
        <div className="row text-center">
          <div className="col">
            <span className={this.getClassColorBadge()}>
              {counter.value === 0 ? "zero" : counter.value}
            </span>
          </div>
          <div className="col">
            <button className="btn btn-primary m-3" onClick={()=>{onIncrement(counter)}}>
              Incrments
            </button>
          </div>
          <div className="col">
            <button className="btn btn-danger m-3" onClick={()=>{onDelete(counter.id)}}>
              Delete
            </button>
          </div>
        </div>

        {/* <input type="text"  onChange={this.getEvent} value={counter.prod} />

        <fieldset style={{ border: "5px solid black", borderRadius: "7px" }}>
          <legend className="text-center">
            <h2>ProductsList</h2>
          </legend>
          <ul>{products}</ul>
        </fieldset> */}
      </div>
    );
  }
}

export default Counter;
