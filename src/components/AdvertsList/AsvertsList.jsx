import { AdverdsCardItem } from "../AdverdsCardItem/AdverdsCardItem";
import { AdverdsContainer, List } from "./AdvertsList.styled";

export const AsvertsList = ({ adverds }) => {
  return (
    <AdverdsContainer>
      <List>
        {adverds.length > 0 &&
          adverds.map((adverd) => (
            <AdverdsCardItem key={adverd._id} adverd={adverd} />
          ))}
      </List>
    </AdverdsContainer>
  );
};
