import { useCallback, useState, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`;
const FormWrapper = styled(Form)`
  padding: 10px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
  const [id, setId] = useState("");
  const [password, setpassword] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setpassword(e.target.value);
  }, []);

  // We don't use inline styles for optimization
  // (최적화를 위해 인라인 스타일은 쓰지않고 useMemo, styled-component등을 사용 )
  // const style = useMemo(() => {
  //   marginTop: 10;
  // }, []);

  const onSubmitForm = useCallback(() => {
    console.log(id, password);
    setIsLoggedIn(true);
  }, [id, password]);

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">ID</label>
        <br />
        <Input name="user-id" value={id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">PW</label>
        <br />
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          required
        />
      </div>
      {/* <ButtonWrapper style={style}> */}
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          Login
        </Button>
        <Link href="/signuo">
          <a>
            <Button>JOIN</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
