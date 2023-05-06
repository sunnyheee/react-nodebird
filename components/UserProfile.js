import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { logoutAction } from "../reducers";

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
          <div key="twite">Post</div>
          <div key="followings">Followings</div>
          <div key="followers">Followers</div>
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
