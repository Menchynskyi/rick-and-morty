import React from 'react';
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

export const FilterCharacters: React.FC = () => {
  const dispatch = useCharacterDispatch();
  const { filterOptions: state } = useCharacterState();

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

  const handleClick = () => {
    dispatch({ type: 'resetFilterOptions' });
  };

  return (
    <FilterContainer>
      <InnerContainer>
        <InputStyled
          value={state.species}
          onChange={handleInputChange('species')}
          placeholder="Species"
        />
        <InputStyled
          value={state.type}
          onChange={handleInputChange('type')}
          placeholder="Type"
        />
      </InnerContainer>
      <InnerContainer>
        <InputStyled
          value={state.name}
          onChange={handleInputChange('name')}
          placeholder="Name"
        />
        <ResetButton type="button" onClick={handleClick}>
          Reset
        </ResetButton>
      </InnerContainer>
      <InnerContainer>
        <SelectContainer>
          <ReactSelect
            value={
              state.status === ''
                ? null
                : { value: state.status, label: state.status }
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
            value={
              state.gender === ''
                ? null
                : { value: state.gender, label: state.gender }
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
