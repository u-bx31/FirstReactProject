import React, { Component } from "react";
import Component1 from "./component";

class Counters extends Component {
  

  render() {
    const {onDelete , onIncrement , handleClickRest, counter} = this.props
    return (
      <div>
        <div className="container">
          <button className="btn m-2 w-100 btn-primary" onClick={handleClickRest}>
            Rest
          </button>
          <div className="mt-2">
            {counter.map((counter) => (
              <Component1 key={counter.id} onDelete={onDelete} onIncrement={onIncrement} counter={counter} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
