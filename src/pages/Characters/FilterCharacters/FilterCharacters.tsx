import React from 'react';
import { FilterContainer, SelectStyled } from './FilterCharactersStyled';
import { useCharacterDispatch } from '../../../character-context';

type Select = {
  value: string;
  label: string;
};

const status = ['Alive', 'Dead', 'unknown'];
const gender = ['Female', 'Male', 'Genderless', 'unknown'];

const setOptions = (propArray: string[]): Select[] => {
  return propArray.map((name) => {
    return {
      value: name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
    };
  });
};

export const FilterCharacters: React.FC = () => {
  const dispatch = useCharacterDispatch();

  const handleInputChange = (option: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    dispatch({
      type: 'setFilterOptions',
      payload: { option, value },
    });
  };

  const handleSelectChange = (option: string) => (event: Select) => {
    const { value } = event;
    dispatch({ type: 'setFilterOptions', payload: { option, value } });
  };

  return (
    <FilterContainer>
      <input onChange={handleInputChange('name')} placeholder="Name" />
      <input onChange={handleInputChange('species')} placeholder="Species" />
      <input onChange={handleInputChange('type')} placeholder="Type" />
      <SelectStyled
        onChange={handleSelectChange('status')}
        options={setOptions(status)}
        placeholder="Status"
      />
      <SelectStyled
        onChange={handleSelectChange('gender')}
        options={setOptions(gender)}
        placeholder="Gender"
      />
    </FilterContainer>
  );
};
