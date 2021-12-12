import React from "react";
import styled from "styled-components";
import ButtonComponent from "./Button/ButtonComponent";
import Responsive from "./Responsive";
import TextComponent from "./text/TextComponent";
import LinkComponent from "./text/LinkComponent";

const NavbarBlock = styled.nav`
  top: 0;
  position: fixed;
  width: 100%;
  height: 8rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  background: white;
`;

const NavbarWrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  & .left {
    display: flex;
    align-items: center;
    & .logo {
      display: flex;
      align-items: center;
    }
  }
`;

const NavbarLogo = styled(ButtonComponent)`
  font-size: 2.5rem;
  font-weight: bolder;
  padding: 0.8rem;
  box-sizing: border-box;
  margin-right: 0.3rem;
  color: black;
`;

const NavbarText = styled(TextComponent)`
  color: grey;
  padding: 0.8rem;
  margin-right: 0.4rem;
  font-size: 1.4rem;
`;

const NavbarLink = styled(LinkComponent)``;

const DropdownBtn = styled(ButtonComponent)`
  background: none;
  width: 2rem;
  border-radius: 50%;
  margin: 0;
  padding: 0;
`;

const SigninBtn = styled(ButtonComponent)`
  background: none;
  color: red;
  border 1px solid red;
  font-size : 1.5rem;
`;

const SignupBtn = styled(ButtonComponent)`
  background: red;
  color: #FFFFFF;
  border 1px solid red;
  font-size : 1.5rem;
`;

function NavbarComponent() {
  return (
    <NavbarBlock>
      <NavbarWrapper>
        <div className="left">
          <div className="logo">
            <NavbarLogo to="/">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAACQCAMAAAB3YPNYAAAApVBMVEX///8AAACGhob5+fny8vLo6OgHBwfFxcXtZlN+fn61tbW9vb319fXj4+P6+vpra2syMjIODg51dXXU1NTNzc3m5uaWlpY1NTVJSUnc3NwpKSlpaWktLS2wsLBQUFDIyMgbGxukpKSRkZEiIiI/Pz/50MsXFxeUlJROTk47OztfX19hYWHsV0CLi4vsX0qdnZ397ev62dXyl4vyj4P4xL7ubFrvdmaDVJKjAAAIuElEQVR4nO2ceX/aOBCGbTAlHIZwhHKGK0mbg6Tb7u73/2iLD41Gl00w2vSXvs8/je2xJL+WR6ORaBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHwR3S6vjyzHH92Qz8m3MOPhoxvyOanl8oYf3ZDPCeT1CuT1CuT1CuT1CuT1CuT1CuT1CuT1ym8obxTP4obPCnrxbBb3TjLtHk1vKlT1m8k7mkzz9sxbTS81dIaDrILNsFNsWV/1K7flt5J3+xAqDOumzazzrdaqTTpxfksrJT8KRtlhW9juVAmjmlpBK3K2pTFUTXdd3SKva+WoK0WTt5PdMrFVOMmu+elUR7ahQUszGbX4xVkQtPO/N9n1nrg2CoJx1vd4KvDNrOHgaEzNNH3TTFhdo6FRl1ZMejQTRxZ9qW2xee0CNL6aDxQuFJPxnXZ5OtqKP7N+fiMOm+Nl/teKbo/021OWM0tj4r3N9E4ZESJxekx1tY2CVHljcWTJTw7ENS/DTtP2PGGfWXSfLQbz/N8vmbwNEo0sSN6Zfq/A/KbXLtMRMyJ5Zb8okzf4Lg4NFzAWV27PFLCQdmiFyTv64nrmBF1eiZB35L55pTXG/qp1WSLzaqm8HXFoiNh3l1Gdjt7QHClvwSMnlMobm1esogWFLyIMpSs5R96A+ogW7XWpDMtoXhXnd0vyOj/XnFJ5rc6U4MOJRTZeUVRgVy7vQRxrQ+pKnNcH80sw521crJqjdbuVnhND201Yglve7JH77Mx81xmNOwcu+B1rzC07/zhpHk1bA3aKRluLvKYX1+WlBxmodo/i/MgoojI71sItzaaSOEG8YzWqmN8ZfdEp73NaHv/eSYMmK0W6XzYKzCnQajPHLzyJKe+TORM0phX08pRXQZ/v1woyOmCaPCmepyMemserw+yZx7w/uuRtib5AnSO85RKwmQOd29ApHhX2nuj0dX5Kk3do7XeGvPbBjcy2p4p2OnKq4HA80u+HUznNimXwZZdXhqkU9YRPasnkCqn7ys47VE3lq1hnJxR57xzRqjkpplu4v6eT7lnkudSp7IXDQjoP9ZFZIGyRl9kuxLmlXjQVsc9PiJSHGTrpV7i8Q91YYMordj6ENWlFXfrZVc75UH9xbrWgTITW9+QTW+RlIbN8gcYMTV6KtQKMfqRfYvK6+oVNXlmMtCKHvHYWdDbUgVwJrLGlQRnyCQ1557YCLJ1sK65lGQV6199MU/Ikba3yjfvhLBmzW7UY3mofe3kGZY3cGe0haMwz5OX9YCJO9jttHXr+rAeSh22ZpvJaairlVWclP+7/kgcWeWmCNDXatztVs9OJSst+Mpto3KzLyzuvdL2FpKbTcjvhfKW8SpN+vry+XN2LI1u+l+4Tg9tcP3FBaD7m3EQounffck3IocurxCDXp8tbPLnLyb5hklep69fr1ZEX0YFt8lJnzQc38l3T4PLQqOlMxAkDPd+aIPyhLq+SpZGhbBFJ/fVys4Q0diZ5eaz64yVR9+r1V35sk1fv9uR0fGRz2kqbbRTVLpyvLq8yTPI5rZvky+yWmyWklZFKvK6/0857JD+2LgbRYJ52Alnnact/76OttNmG0hiNk+TVlpgcJEHbWfLyke0+l/ef/NgqL/nDx+SIsjnO4LkK5Bycfl0Y2MY+8WEVynuac0jkPdE5uOWt587hZ35sX8qkBiV10hqKh2wOy7Y4123F5NeWxxejVqG81kUggxte3rnyBn8n+r5eiU/RLi/Fk0OWiN68T7cT6bKq7FBcZU7IKdNUKK+25msni3tvyw3FiG+XN7j/9/XqJzk6u7x8cPOZzUmgZKPL+W6FgbmqS8IVyksFTOpRQlejfiQfVmhmtnKb5qU65A0CPkI59jlQum/lM5uTQgkz17xCruPo7llOlwvlpT5eHljSlMqdRhA45eU45KWGP9Iwp+dTLoXUyDW4ke/8om7lYAmcQnllZGbEdo3+RPlo5NhmzHLihfr5VpGXxhNa6i4spRJUw97YCJMhc7B7vgI4Y/FssbwyravvF0tmaYpq5OgftMYkaj6stBNny7sNdQoKqQYFfuHS4X/YVJW06E1444rlld18o9aQzak3rFPLZaOvSrfuZkPEUmpZSV5jJcm1W+gCsLiUy3KzmOYTZb4KP6g143jWaamtK5aXr2Sy6DKmUZU5Phk77JmzGlEbKcNQSd5AXcvytfUphas3FcLMEgFFsFYaWpXIq6ws5E8S8zckR3u+KaCWv94ZE2NglHmWvNpmCh/ZHEJ9ldPWoZZPyylJtgyLKZE32HLj/fBQGypTOR5zH/iF5bEtfWV/EO2+qyavNoGxTfgvh0s9kjcqScuUySuTxjb2imnhJE92s4rybpViPezNYbjUkyneaG63yCmVt3C6q+ZC6wWvci91qCivkj3yks1hRPY8Nsug92wbJN8hb92tr77A6f5UBizwqCivMp54yeZw6tbZvrJAYdlFOReal8sb1L+b9yfszTx+5HgVjzwWriovG9yM/QEesGwd16amvTc1c7vfBlvxdzb0F8mrDVqCoTWJbQ1VaooJfd1nysu2DtnWYS5OQ48FLVmkdUvEqo+tZNoquoAIXIWHtq8sjYyVymvXzoK10YGn+hcsWlK0nVykFGzOVU6nvP4OStLYKS64b13d7Maj9fhGfKaNZgIZ9tbpsTP7tFY8+FNRx+so7mphtqWsrpRYbR+Hwn1f2Rxbc1atp7vl423/bexj6en4dpqH5+n19fT50HGkOIioU0tNF7umj8CJXp+3bM6fDI0Tg3Jb8G5oKK+V24J3Q/Mk2y+/QEVoFeGu3Ba8G7bcBi6OTDmUxS/gDGhOYduYCKpCWU/875IeoDWRzUe35FNCqR7rf+0AKvJ/Z3P+LNy/jAcXgFb+Sv47H3AOtt+2gYuh/3gFXBRaakI2xwfR8zTF045pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKrwH8zcZxbijZzmAAAAAElFTkSuQmCC"
                alt=""
                width="130px"
              />
            </NavbarLogo>
            <DropdownBtn to="#">
              <img
                src="https://cdn-icons-png.flaticon.com/512/60/60995.png"
                alt=""
                width="10px"
              />
            </DropdownBtn>
          </div>
          <div className="text">
            <NavbarLink to="#">
              <NavbarText>프로필 탐색</NavbarText>
            </NavbarLink>
            <NavbarLink to="#">
              <NavbarText>채용 공고</NavbarText>
            </NavbarLink>
          </div>
        </div>
        <div className="right">
          <SigninBtn to="/signin">로그인</SigninBtn>
          <SignupBtn to="/signup">회원가입</SignupBtn>
        </div>
      </NavbarWrapper>
    </NavbarBlock>
  );
}

export default NavbarComponent;
