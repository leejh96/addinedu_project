import React, { useState } from "react";
import SignUpComponent from "../../components/auth/SignUpComponent";

function SignUpContainer() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    const { password, passwordConfirm } = userInfo;
    if (password !== passwordConfirm) {
      alert("비밀번호가 서로 다릅니다.");
    }
  };

  return (
    <SignUpComponent
      userInfo={userInfo}
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default SignUpContainer;
