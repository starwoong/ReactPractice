import React, { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state; // 스테이트 조회
    return (
      <div>
        <h1>{number}</h1>
        <h1>not change : {fixedNumber}</h1>
        <button
          onClick={() => {
            // 스테이트에 새로운 값 넣기
            this.setState(
              {
                number: number + 1,
              },
              () => {
                console.log("setState Callback just did it");
                console.log(this.state);
              }
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
