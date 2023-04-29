import { Card, Avatar, Button } from "antd";
import { useCallback } from "react";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;

const UserProfile = ({ setIsLoggedIn }) => {
  const onLogOut = useCallback(() => {
    setIsLoggedIn(false);
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
