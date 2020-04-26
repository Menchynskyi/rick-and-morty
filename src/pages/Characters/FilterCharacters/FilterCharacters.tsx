import React, { useState, useEffect } from 'react';
import ReactSelect, { ValueType } from 'react-select';
import {
  FilterContainer,
  SelectContainer,
  InputStyled,
  InnerContainer,
} from './FilterCharactersStyled';
import { useCharacterDispatch, useCharacterState } from '../../../contexts';
import { Button } from '../../../components';

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

  useEffect(() => {
    return () => {
      dispatch({ type: 'resetFilterOptions' });
    };
  }, [dispatch]);

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
    if (Object.values(inputState).some((value) => value)) {
      clearTimeout(timer);
      setInputState(initialInputState);
      dispatch({ type: 'resetFilterOptions' });
    }
  };

  return (
    <FilterContainer>
      <InnerContainer>
        <InputStyled
          name="species"
          placeholder="Species"
          autoComplete="off"
          onChange={handleInputChange}
          value={inputState.species}
        />
        <InputStyled
          name="type"
          placeholder="Type"
          autoComplete="off"
          value={inputState.type}
          onChange={handleInputChange}
        />
      </InnerContainer>
      <InnerContainer>
        <InputStyled
          name="name"
          placeholder="Name"
          autoComplete="off"
          value={inputState.name}
          onChange={handleInputChange}
        />
        <Button
          color="secondary"
          size="small"
          fullWidth
          type="button"
          onClick={handleClick}
        >
          Reset
        </Button>
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
