import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  padding: 10px 50px;
  border-bottom: 2px solid var(--primary-red);
`;
export const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
`;
export const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const List = styled.ul`
  display: flex;
  gap: 60px;
`;
export const NavlinkHome = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  color: var(--color-main);
`;
export const Navlink = styled(NavLink)`
  font-weight: 600;
  font-size: 24px;
  color: var(--color-main);

  &.active {
    color: var(--color-button);
  }
`;
