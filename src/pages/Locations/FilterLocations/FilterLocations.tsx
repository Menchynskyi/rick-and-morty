import React, { useState, useEffect } from 'react';
import {
  FilterContainer,
  InputContainer,
  ButtonContainer,
} from './FilterLocationsStyled';
import { useLocationDispatch } from '../../../contexts';
import { Button, Input } from '../../../components';

const initialInputState = {
  name: '',
  type: '',
  dimension: '',
};

export const FilterLocations: React.FC = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [timer, setTimer] = useState(0);
  const dispatch = useLocationDispatch();

  useEffect(() => {
    return () => {
      dispatch({ type: 'resetFilterOptions' });
    };
  }, [dispatch]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleClick = () => {
    if (Object.values(inputState).some((value) => value)) {
      clearTimeout(timer);
      setInputState(initialInputState);
      dispatch({ type: 'resetFilterOptions' });
    }
  };

  return (
    <FilterContainer>
      <InputContainer>
        <Input
          name="name"
          placeholder="Name"
          autoComplete="off"
          value={inputState.name}
          onChange={handleChange}
          fullWidth
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="type"
          placeholder="Type"
          autoComplete="off"
          value={inputState.type}
          onChange={handleChange}
          fullWidth
        />
      </InputContainer>
      <InputContainer>
        <Input
          name="dimension"
          placeholder="Dimension"
          autoComplete="off"
          value={inputState.dimension}
          onChange={handleChange}
          fullWidth
        />
      </InputContainer>

      <ButtonContainer>
        <Button
          color="secondary"
          size="small"
          fullWidth
          type="button"
          onClick={handleClick}
        >
          Reset
        </Button>
      </ButtonContainer>
    </FilterContainer>
  );
};
