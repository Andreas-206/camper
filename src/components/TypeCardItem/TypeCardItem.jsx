import icons from "../../img/sprite.svg";
import { Icon, TypeCard } from "./TypeCardItem.styled";
export const TypeCardItem = ({ icon, value = "", text }) => {
  return (
    <TypeCard>
      <Icon>
        <use href={`${icons}#icon-${icon}`}></use>
      </Icon>
      {value} {text}
    </TypeCard>
  );
};
