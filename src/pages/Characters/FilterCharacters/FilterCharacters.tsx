import React, { useState, useEffect } from 'react';
import { ValueType } from 'react-select';
import { FilterContainer } from './FilterCharactersStyled';
import { useCharacterDispatch, useCharacterState } from '../../../contexts';
import { Button, Input, Select } from '../../../components';

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
      <Input
        name="name"
        placeholder="Name"
        autoComplete="off"
        value={inputState.name}
        onChange={handleInputChange}
        fullWidth
        size="small"
      />
      <Select
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
        fullWidth
      />
      <Select
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
        fullWidth
      />
      <Input
        name="type"
        placeholder="Type"
        autoComplete="off"
        value={inputState.type}
        onChange={handleInputChange}
        fullWidth
        size="small"
      />
      <Input
        name="species"
        placeholder="Species"
        autoComplete="off"
        onChange={handleInputChange}
        value={inputState.species}
        fullWidth
        size="small"
      />
      <Button
        color="secondary"
        size="extraSmall"
        fullWidth
        type="button"
        onClick={handleClick}
      >
        Reset
      </Button>
    </FilterContainer>
  );
};
