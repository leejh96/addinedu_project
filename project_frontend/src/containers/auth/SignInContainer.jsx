import React, { useState } from "react";
import SignInComponent from "../../components/auth/SignInComponent";
import { useNavigate } from "react-router-dom";
import client from "../../libs/api/client";

function SignInContainer({ setUser, setIsLoggedIn }) {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
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
    try {
      const { email, password } = userInfo;
      const response = await client.post("/auth/signin", {
        email,
        password,
      });
      if (response.status === 200) {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
        client.defaults.headers.common["Authorization"] = `${accessToken}`;
        const result = await client.get("/users");
        console.log(result.data.data);
        setUser(result.data.data);
        setIsLoggedIn(true);
        navigate("/");
      }
    } catch (error) {
      if (error.response.status === 400) {
        alert("해당하는 이메일이 없습니다.");
      } else if (error.response.status === 401) {
        alert("비밀번호를 틀렸습니다.");
      } else if (error.response.status === 500) {
        alert("서버에러!");
      }
      return;
    }
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
