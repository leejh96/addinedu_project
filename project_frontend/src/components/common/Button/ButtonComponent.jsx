import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonComponent = styled(Link)`
  margin: 0.4rem;
  padding: 0.7rem 1.5rem;
  border-radius: 0.5rem 0.5rem 0.5rem 0.5rem;
  cursor: pointer;
  text-decoration: none;
`;

export default ButtonComponent;
