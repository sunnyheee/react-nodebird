import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutAction } from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const UserProfile = () => {
  const dispatch = useDispatch();

  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);

  return (
    <Card
      actions={[
        <>
          <div key="twite">
            Post
            <br />0
          </div>
          <div key="followings">
            Followings
            <br />0
          </div>
          <div key="followers">
            Followers
            <br />0
          </div>
        </>,
      ]}
    >
      <Card.Meta avatar={<Avatar>PAKU</Avatar>} title="PAKU" />
      <ButtonWrapper>
        <Button onClick={onLogOut}>Logout</Button>
      </ButtonWrapper>
    </Card>
  );
};
export default UserProfile;
