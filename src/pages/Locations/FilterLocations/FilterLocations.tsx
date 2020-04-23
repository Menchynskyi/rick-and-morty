import React, { useState, useEffect } from 'react';
import {
  FilterContainer,
  InputStyled,
  ResetButton,
} from './FilterLocationsStyled';
import { useLocationDispatch } from '../../../contexts';

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
    setInputState(initialInputState);
    dispatch({ type: 'resetFilterOptions' });
  };

  return (
    <FilterContainer>
      <InputStyled
        name="name"
        placeholder="Name"
        autoComplete="off"
        value={inputState.name}
        onChange={handleChange}
      />
      <InputStyled
        name="type"
        placeholder="Type"
        autoComplete="off"
        value={inputState.type}
        onChange={handleChange}
      />
      <InputStyled
        name="dimension"
        placeholder="Dimension"
        autoComplete="off"
        value={inputState.dimension}
        onChange={handleChange}
      />
      <ResetButton type="button" onClick={handleClick}>
        Reset
      </ResetButton>
    </FilterContainer>
  );
};
