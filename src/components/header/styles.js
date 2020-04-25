import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

// css blocks
const OptionContainerStyles = css`
  padding: 10px 15px;
  cursor: pointer;
`;

// components
export const HeaderContainer = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;

export const Logo = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  ${OptionContainerStyles};
`;

export const OptionDiv = styled.div`
  ${OptionContainerStyles}
`;
