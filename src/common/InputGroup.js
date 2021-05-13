import React from "react";
import PropTypes from "prop-types";

const InputGroup = (props) => {
    console.log(props);
  return <div>{props.children}</div>;
};

InputGroup.propTypes = {};

export default InputGroup;
