import React, { useState, useEffect } from 'react';
import {
  InputStyled,
  FilterContainer,
  ResetButton,
} from './FilterEpisodesStyled';
import { useEpisodeDispatch } from '../../../contexts';

const initialInputState = {
  name: '',
};

export const FilterEpisodes: React.FC = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [timer, setTimer] = useState(0);
  const dispatch = useEpisodeDispatch();

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
        value={inputState.name}
        placeholder="Name"
        onChange={handleChange}
      />
      <ResetButton type="button" onClick={handleClick}>
        Reset
      </ResetButton>
    </FilterContainer>
  );
};
