import PropsTypes from "prop-types";
import Link from "next/Link";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";

import { useState } from "react";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";

const SearchInput = styled(Input.Search)`
  vertical-aligh: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn} />
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn} />
          )}
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

AppLayout.PropsTypes = {
  children: PropsTypes.node.isRequired,
};
export default AppLayout;
