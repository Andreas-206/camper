import React from 'react';
import { nanoid } from 'nanoid';
import { FilterCard } from '../FilterCard/FilterCard';
import icons from '../../img/sprite.svg';
import styles from './AdvertsFilter.module.css';

const equipments = [
  { icon: 'icon-airConditioner', text: 'AC' },
  { icon: 'icon-transmission', text: 'Automatic' },
  { icon: 'icon-kitchen', text: 'Kitchen' },
  { icon: 'icon-tv', text: 'TV' },
  { icon: 'icon-shower', text: 'Shower/WC' },
];

const types = [
  { icon: 'icon-van', text: 'Van' },
  { icon: 'icon-fully-integrated', text: 'Fully Integrated' },
  { icon: 'icon-alcove', text: 'Alcove' },
];

export const AdvertsFilter = () => {
  return (
    <div className={styles.filterContainer}>
      <div className={styles.inputBlock}>
        <label htmlFor="map" className={styles.label}>Location</label>
        <div className={styles.inputContainer}>
          <input type="text" id="map" name="map" placeholder="City" className={styles.input} />
          <svg width="18" height="20" className={styles.svgMap}>
            <use href={icons + '#icon-map-pin'}></use>
          </svg>
        </div>
      </div>
      <div className={styles.filterSection}>
        <h3 className={styles.filterTitle}>Filters</h3>
        <div>
          <h2 className={styles.equipmentTitle}>Vehicle equipment</h2>
          <ul className={styles.equipmentList}>
            {equipments.map((equipment) => (
              <FilterCard
                key={nanoid()}
                icon={equipment.icon}
                text={equipment.text}
                size="SM"
              />
            ))}
          </ul>
        </div>
        <div>
          <h2 className={styles.typeTitle}>Vehicle type</h2>
          <ul className={styles.typeList}>
            {types.map((type) => (
              <FilterCard
                key={nanoid()}
                icon={type.icon}
                text={type.text}
                size="XL"
              />
            ))}
          </ul>
        </div>
      </div>
      <button type="button" className={styles.buttonSearch}>Search</button>
    </div>
  );
};