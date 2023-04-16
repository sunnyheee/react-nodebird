import propTypes from "prop-types";
import "antd/dist/antd.css";

const NodeBird = ({ Component }) => {
  return <Component />;
};

NodeBird.protoType = {
  Component: propTypes.elementType.isRequired,
};

export default NodeBird;
