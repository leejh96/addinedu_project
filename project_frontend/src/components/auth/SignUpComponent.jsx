import React from "react";
import styled from "styled-components";
import palette from "../../libs/styles/palette";
import AuthTemplate from "./template/AuthTemplate";

const SignUpFormBlock = styled.div`
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

function SignUpComponent({ userInfo, onClickSubmit, onChangeInput }) {
  const { email, name, password, passwordConfirm } = userInfo;

  return (
    <>
      <AuthTemplate>
        <SignUpFormBlock>
          <h3>회원 가입</h3>
          <StyledInput
            name="email"
            onChange={onChangeInput}
            value={email}
            placeholder="이메일"
          />
          <StyledInput
            name="name"
            onChange={onChangeInput}
            value={name}
            placeholder="이름"
          />
          <StyledInput
            name="password"
            onChange={onChangeInput}
            value={password}
            placeholder="비밀번호"
          />
          <StyledInput
            name="passwordConfirm"
            onChange={onChangeInput}
            value={passwordConfirm}
            placeholder="비밀번호 확인"
          />
          <StyledButton onClick={onClickSubmit}>회원가입</StyledButton>
        </SignUpFormBlock>
      </AuthTemplate>
    </>
  );
}

export default SignUpComponent;
