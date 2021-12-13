import React, { useState } from "react";
import SignInComponent from "../../components/auth/SignInComponent";

function SignInContainer() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = () => {
    alert("로그인 성공");
  };

  return (
    <SignInComponent
      userInfo={userInfo}
      onChangeInput={onChangeInput}
      onClickSubmit={onClickSubmit}
    />
  );
}

export default SignInContainer;
