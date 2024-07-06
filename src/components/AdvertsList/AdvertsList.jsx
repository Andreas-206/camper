import { AdverdsCardItem } from "../AdverdsCardItem/AdverdsCardItem";
import { AdverdsContainer, List } from "./AdvertsList.styled";

export const AdvertsList = ({ adverts }) => {
  return (
    <AdverdsContainer>
      <List>
        {adverts.length > 0 &&
          adverts.map((advert) => (
            <AdverdsCardItem key={advert._id} adverd={advert} />
          ))}
      </List>
    </AdverdsContainer>
  );
};
