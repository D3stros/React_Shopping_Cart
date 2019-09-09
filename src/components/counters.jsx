import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // Destructuring the props. Then this.props is not necessary anymore. The variable can be referenced directly
    const { onReset, counters, onDelete, onIncrement } = this.props;
    return (
      // Getting each counter and map it to a counter component
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
