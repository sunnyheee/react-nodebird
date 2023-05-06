import propTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";
import wrapper from "../store/configureStore";

const NodeBird = ({ Component }) => {
  return (
    <>
      <Head>
        <mata charSet="utf-8" />
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.protoType = {
  Component: propTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
