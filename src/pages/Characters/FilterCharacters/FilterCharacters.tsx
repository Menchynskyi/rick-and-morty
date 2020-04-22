import React, { useState } from 'react';
import ReactSelect, { ValueType } from 'react-select';
import {
  FilterContainer,
  SelectContainer,
  InputStyled,
  InnerContainer,
  ResetButton,
} from './FilterCharactersStyled';
import { useCharacterDispatch, useCharacterState } from '../../../contexts';

type Select = {
  value: string;
  label: string;
};

const status = ['any', 'Alive', 'Dead', 'unknown'];
const gender = ['any', 'Female', 'Male', 'Genderless', 'unknown'];

const setOptions = (propArray: string[]): Select[] => {
  return propArray.map((name) => {
    return {
      value: name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
    };
  });
};

const initialInputState = {
  name: '',
  species: '',
  type: '',
};

export const FilterCharacters: React.FC = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [timer, setTimer] = useState(0);
  const dispatch = useCharacterDispatch();
  const { filterOptions } = useCharacterState();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(timer);
    const { value } = event.target;
    const option = event.target.name;
    setInputState((prev) => ({ ...prev, [option]: value }));
    setTimer(
      setTimeout(() => {
        dispatch({
          type: 'setFilterOptions',
          payload: { option, value },
        });
      }, 500)
    );
  };

  const handleSelectChange = (option: string) => (
    selectedOption: ValueType<Select>
  ) => {
    const { value } = selectedOption as Select;
    dispatch({ type: 'setFilterOptions', payload: { option, value } });
  };

  const handleClick = () => {
    setInputState(initialInputState);
    dispatch({ type: 'resetFilterOptions' });
  };

  return (
    <FilterContainer>
      <InnerContainer>
        <InputStyled
          value={inputState.species}
          name="species"
          onChange={handleInputChange}
          placeholder="Species"
        />
        <InputStyled
          value={inputState.type}
          name="type"
          onChange={handleInputChange}
          placeholder="Type"
        />
      </InnerContainer>
      <InnerContainer>
        <InputStyled
          value={inputState.name}
          name="name"
          onChange={handleInputChange}
          placeholder="Name"
        />
        <ResetButton type="button" onClick={handleClick}>
          Reset
        </ResetButton>
      </InnerContainer>
      <InnerContainer>
        <SelectContainer>
          <ReactSelect
            name="status"
            value={
              filterOptions.status === ''
                ? null
                : { value: filterOptions.status, label: filterOptions.status }
            }
            onChange={handleSelectChange('status')}
            options={setOptions(status)}
            placeholder="Status"
            className="react-select-container"
            classNamePrefix="react-select"
          />
        </SelectContainer>
        <SelectContainer>
          <ReactSelect
            name="gender"
            value={
              filterOptions.gender === ''
                ? null
                : { value: filterOptions.gender, label: filterOptions.gender }
            }
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
