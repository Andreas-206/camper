import { TypeCardItem } from "../TypeCardItem/TypeCardItem";
import {
  DetailItem,
  DetailsList,
  FeaturesContainer,
  TitleDetails,
  TypeCartList,
} from "./Features.styled";
import { categories } from "../variables/categories";
import { details } from "../variables/details";
import { nanoid } from "nanoid";

export const Features = ({ adverd }) => {
  return (
    <FeaturesContainer>
      <TypeCartList>
        <TypeCardItem icon="adults" text="adults" value={adverd.adults} />
        <TypeCardItem icon="transmission" text="Automatic" />
        <TypeCardItem icon="engine" text="Petrol" />
        {categories.map((category) => (
          <TypeCardItem
            key={nanoid()}
            icon={category}
            value={adverd.details[category] > 1 && adverd.details[category]}
            text={category.charAt(0).toUpperCase() + category.slice(1)}
          />
        ))}
      </TypeCartList>
      <TitleDetails>Vehicle details</TitleDetails>
      <DetailsList>
        {details.map((detail) => (
          <DetailItem key={nanoid()}>
            <span>{detail}</span>
            <span>{adverd[detail]}</span>
          </DetailItem>
        ))}
      </DetailsList>
    </FeaturesContainer>
  );
};
