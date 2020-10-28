import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; // ref 설정 부분

  // mount 1 start
  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // mount 2 , update 1
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // mount 4 Last
  componentDidMount() {
    console.log("componentDidMount");
  }

  // update 2
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate", nextProps, nextState);
    // 마지막 숫자가 4면 리렌더링 하지 않음
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  // update 4
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }
    return null;
  }

  //update 5 Last
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);
    if (snapshot) {
      console.log("Color before updating", snapshot);
    }
  }

  // mount 3, update 3
  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        {/* 일부러 만든 오류 */}
        {/*this.props.missing.value*/}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color : {this.state.color}</p>
        <button onClick={this.handleClick}>ADD</button>
      </div>
    );
  }
}

export default LifeCycleSample;
