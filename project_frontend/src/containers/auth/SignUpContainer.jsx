import React, { useState } from "react";
import SignUpComponent from "../../components/auth/SignUpComponent";
import { useNavigate } from "react-router-dom";
import client from "../../libs/api/client";
function SignUpContainer() {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };

  const onClickSubmit = async () => {
    const { email, name, password, passwordConfirm } = userInfo;
    if (password !== passwordConfirm) {
      alert("비밀번호가 서로 다릅니다.");

      setUserInfo({
        ...userInfo,
        email: "",
        name: "",
        password: "",
        passwordConfirm: "",
      });
      return;
    }

    const data = {
      email,
      name,
      password,
    };
    try {
      const response = await client.post("/auth/signup", data);
      if (response.status === 200) {
        alert("회원가입 완료");
        navigate("/");
      }
      console.log(response);
    } catch (error) {
      if (error.response.status === 400) {
        alert("이미 존재하는 회원입니다.");
      }
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
