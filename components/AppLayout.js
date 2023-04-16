import PropsTypes from "prop-types";
import Link from "next/Link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";
import LoginForm from "../components/LoginForm";
import UserProfile from "../components/UserProfile";

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
          <Input.Search enterButton style={{ verticalAlign: "middle" }} />
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
      {children}
    </div>
  );
};

AppLayout.PropsTypes = {
  children: PropsTypes.node.isRequired,
};
export default AppLayout;
