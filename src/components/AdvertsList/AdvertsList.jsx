import { AdvertsCardItem } from "../AdverdsCardItem/AdvertsCardItem";
import { AdvertsContainer, List } from "./AdvertsList.styled";

export const AdvertsList = ({ adverts }) => {
  return (
    <AdvertsContainer>
      <List>
        {adverts.length > 0 &&
          adverts.map((advert) => (
            <AdvertsCardItem key={advert._id} advert={advert} />
          ))}
      </List>
    </AdvertsContainer>
  );
};
