import Head from "next/head";
import { useCallback, useState } from "react";
import { Form, Input, Checkbox, button, Button } from "antd";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import useInput from "../components/hooks/useInput";

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [id, onChangeId] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(id, nickname, password);
  }, [password, passwordCheck, term]);
  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);
  return (
    <AppLayout>
      <Head>
        <title>Signup | NodeBird</title>
      </Head>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-id">Id</label>
          <br />
          <Input name="user-id" vaule={id} required onChange={onChangeId} />
        </div>
        <div>
          <label htmlFor="user-nickname">Nickname</label>
          <br />
          <Input
            name="user-nick"
            vaule={nickname}
            required
            onChange={onChangeNickname}
          />
        </div>
        <div>
          <label htmlFor="user-id">Password</label>
          <br />
          <Input
            name="user-password"
            type="password"
            vaule={password}
            required
            onChange={onChangePassword}
          />
        </div>
        <div>
          <label htmlFor="user-password-check">password check</label>
          <br />
          <Input
            name="user-password-check"
            type="password"
            vaule={passwordCheck}
            required
            onChange={onChangePasswordCheck}
          />
          {passwordError && (
            <ErrorMessage style={{ color: "red" }}>
              The password does not match. Please keep checking back.
            </ErrorMessage>
          )}
        </div>
        <div>
          <Checkbox name="uert-term" checked={term} onChange={onChangeTerm}>
            I agree to the content
          </Checkbox>
          {termError && (
            <ErrorMessage>
              You must agree to the terms and conditions
            </ErrorMessage>
          )}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            Signup
          </Button>
        </div>
      </Form>
    </AppLayout>
  );
};

export default Signup;
