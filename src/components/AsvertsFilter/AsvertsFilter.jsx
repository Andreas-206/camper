import { nanoid } from "nanoid";
import { FilterCard } from "../FilterCard/FilterCard";
import icons from "../../img/sprite.svg";
import {
  ButtonSearch,
  EquipmentList,
  EquipmentTitle,
  FilterContainer,
  FilterSection,
  FilterTitle,
  Input,
  InputBlock,
  InputContainer,
  Label,
  SvgMap,
  TypeList,
  TypeTitle,
} from "./AsvertsFilter.styled";
const equipments = [
  { icon: "icon-airConditioner", text: "AC" },
  { icon: "icon-transmission", text: "Automatic" },
  { icon: "icon-kitchen", text: "Kitchen" },
  { icon: "icon-tv", text: "TV" },
  { icon: "icon-shower", text: "Shower/WC" },
];
const types = [
  { icon: "icon-van", text: "Van" },
  { icon: "icon-fully-integrated", text: "Fully Integrated" },
  { icon: "icon-alcove", text: "Alcove" },
];

export const AsvertsFilter = () => {
  return (
    <FilterContainer>
      <InputBlock>
        <Label htmlFor="map">Location</Label>
        <InputContainer>
          <Input type="text" id="map" name="map" placeholder="City" />
          <SvgMap width="18" height="20">
            <use href={icons + "#icon-map-pin"}></use>
          </SvgMap>
        </InputContainer>
      </InputBlock>
      <FilterSection>
        <FilterTitle>Filters</FilterTitle>
        <div>
          <EquipmentTitle>Vehicle equipment</EquipmentTitle>
          <EquipmentList>
            {equipments.map((equipment) => (
              <FilterCard
                key={nanoid()}
                icon={equipment.icon}
                text={equipment.text}
                size="SM"
              />
            ))}
          </EquipmentList>
        </div>
        <div>
          <TypeTitle>Vehicle type</TypeTitle>
          <TypeList>
            {types.map((type) => (
              <FilterCard
                key={nanoid()}
                icon={type.icon}
                text={type.text}
                size="XL"
              />
            ))}
          </TypeList>
        </div>
      </FilterSection>
      <ButtonSearch type="button">Search</ButtonSearch>
    </FilterContainer>
  );
};
