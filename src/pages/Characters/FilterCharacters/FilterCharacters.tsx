import React from 'react';
import ReactSelect, { ValueType } from 'react-select';
import {
  FilterContainer,
  SelectContainer,
  InputStyled,
  InnerContainer,
  Button,
} from './FilterCharactersStyled';
import { useCharacterDispatch } from '../../../contexts';

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

  const handleSelectChange = (option: string) => (
    selectedOption: ValueType<Select>
  ) => {
    const { value } = selectedOption as Select;
    dispatch({ type: 'setFilterOptions', payload: { option, value } });
  };

  return (
    <FilterContainer>
      <InnerContainer>
        <InputStyled onChange={handleInputChange('type')} placeholder="Type" />
        <InputStyled
          onChange={handleInputChange('species')}
          placeholder="Species"
        />
      </InnerContainer>
      <InnerContainer>
        <InputStyled onChange={handleInputChange('name')} placeholder="Name" />
        <Button type="button">Reset</Button>
      </InnerContainer>
      <InnerContainer>
        <SelectContainer>
          <ReactSelect
            onChange={handleSelectChange('status')}
            options={setOptions(status)}
            placeholder="Status"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </SelectContainer>
        <SelectContainer>
          <ReactSelect
            onChange={handleSelectChange('gender')}
            options={setOptions(gender)}
            placeholder="Gender"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </SelectContainer>
      </InnerContainer>
    </FilterContainer>
  );
};
