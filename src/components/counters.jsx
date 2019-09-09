import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // Using an array of Counter Objects to our state and render them via map method
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  render() {
    return (
      // Getting each counter and map it to a counter component
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} id={counter.id}>
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
