import icons from "../../img/sprite.svg";
import { FilterCardItem, IconFilter, TextCard } from "./FilterCard.styled";
export const FilterCard = ({ icon, text, size }) => {
  return (
    <FilterCardItem>
      <IconFilter className={size}>
        <use href={`${icons}#${icon}`}></use>
      </IconFilter>
      <TextCard>{text}</TextCard>
    </FilterCardItem>
  );
};
