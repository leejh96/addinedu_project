import React from "react";
import styled from "styled-components";

const ResponsiveWrapper = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  position: relative;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

function Responsive({ children, ...rest }) {
  return <ResponsiveWrapper {...rest}>{children}</ResponsiveWrapper>;
}

export default Responsive;
