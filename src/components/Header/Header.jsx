import {
  HeaderContainer,
  LabelBlock,
  List,
  Navigation,
  Navlink,
  NavlinkHome,
} from "./Header.stlyled";
import icons from "../../img/sprite.svg";

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <LabelBlock>
          <svg width="40" height="30">
            <use href={icons + "#icon-alcove"}></use>
          </svg>
          <NavlinkHome to="/">Camper Rentals</NavlinkHome>
        </LabelBlock>
        <List>
          <li>
            <Navlink to="/catalog">Catalog</Navlink>
          </li>
          <li>
            <Navlink to="/favorites">Favorites</Navlink>
          </li>
        </List>
      </Navigation>
      ________________________________________________________________________________________
    </HeaderContainer>
  );
};
