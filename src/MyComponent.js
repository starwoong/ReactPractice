import React, { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  render() {
    const { name, favNumber, children } = this.props;
    return (
      <div>
        Hi, my name is {name} .<br />
        children value is {children} .<br />
        my favorite Number is {favNumber} .
      </div>
    );
  }
}

/*
const MyComponent = ({ name, favNumber, children }) => {
  return (
    <div>
      Hi, my name is {name} .<br />
      children value is {children} .<br />
      my favorite Number is {favNumber} .
    </div>
  );
};
*/

MyComponent.defaultProps = {
  name: "Basic name",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favNumber: PropTypes.number.isRequired,
};

export default MyComponent;
