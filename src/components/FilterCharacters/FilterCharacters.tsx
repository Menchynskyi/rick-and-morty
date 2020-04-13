import React from 'react';
import { FilterContainer, SelectStyled } from './FilterCharactersStyled';

type Filter = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
};

type FilterCharactersProps = {
  filterState: Filter;
  setFilterState: React.Dispatch<React.SetStateAction<Filter>>;
};

const status = ['Alive', 'Dead', 'unknown'];
const gender = ['Female', 'Male', 'Genderless', 'unknown'];

const options = [
  { value: 'da', label: 'da' },
  { value: 'net', label: 'net' },
];

export const FilterCharacters: React.FC<FilterCharactersProps> = ({
  setFilterState,
  filterState,
}) => {
  return (
    <FilterContainer>
      <input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setFilterState({ ...filterState, name: event.target.value });
        }}
        placeholder="name"
      />
      <input placeholder="species" />
      <input placeholder="type" />
      <SelectStyled options={options} placeholder="status" />
      <SelectStyled options={options} placeholder="gender" />
    </FilterContainer>
  );
};
