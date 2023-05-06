import PropTypes from "prop-types";
import Link from "next/Link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";
import { useSelector } from "react-redux";

const SearchInput = styled(Input.Search)`
  vertical-aligh: middle;
`;

const AppLayout = ({ children }) => {
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>NODEBIRD</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>PROFILE</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput enterButton />
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">
            <a>SIGNUP</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/sunnyheee">Made by sunny</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.PropTypes = {
  children: PropTypes.node.isRequired,
};
export default AppLayout;
