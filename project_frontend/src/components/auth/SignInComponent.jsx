import React from "react";
import styled from "styled-components";
import palette from "../../libs/styles/palette";
import AuthTemplate from "./template/AuthTemplate";

const SignInFormBlock = styled.div`
  box-sizing: border-box;

  h3 {
    font-size: 1.5rem;
    font-weight: bolder;
    margin-bottom: 2rem;
  }
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid #868e96;
  outline: none;
  width: 100%;
  box-sizing: border-box;
  padding-bottom: 0.5rem;

  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  border: none;
  border-radius: 4px;
  font-weight: bolder;
  margin-top: 1rem;
  padding: 1rem 2rem;
  outline: none;
  cursor: pointer;
  background-color: ${palette.main};
  color: #ffffff;
`;

function SignInComponent({ userInfo, onClickSubmit, onChangeInput }) {
  const { email, password } = userInfo;

  return (
    <AuthTemplate>
      <SignInFormBlock>
        <h3>로그인</h3>
        <StyledInput
          name="email"
          onChange={onChangeInput}
          value={email}
          placeholder="이메일"
        />
        <StyledInput
          name="password"
          onChange={onChangeInput}
          value={password}
          placeholder="비밀번호"
        />
        <StyledButton onClick={onClickSubmit}>로그인</StyledButton>
      </SignInFormBlock>
    </AuthTemplate>
  );
}

export default SignInComponent;
