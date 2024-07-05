import { AdverdsCardItem } from "../AdverdsCardItem/AdverdsCardItem";
import { AdverdsContainer, List } from "./AdvertsList.styled";

export const AsvertsList = ({ adverts }) => {
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
