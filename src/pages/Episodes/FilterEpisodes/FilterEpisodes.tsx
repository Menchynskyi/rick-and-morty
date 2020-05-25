import React, { useState, useEffect } from 'react';
import { ValueType } from 'react-select';
import { FilterContainer } from './FilterEpisodesStyled';
import { useEpisodeDispatch, useEpisodeState } from '../../../contexts';
import { Button, Input, Select } from '../../../components';

type Select = {
  value?: string;
  label?: string;
};

const episodesNumber = {
  seasons: ['1', '2', '3'],
  episodes: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
};

const initialInputState = {
  name: '',
};

export const FilterEpisodes: React.FC = () => {
  const [inputState, setInputState] = useState(initialInputState);
  const [timer, setTimer] = useState(0);
  const dispatch = useEpisodeDispatch();
  const { episode, season } = useEpisodeState();

  const seasonOptions = [
    { value: 'any', label: 'Any' },
    ...episodesNumber.seasons.map((num) => ({
      value: num,
      label: `Season ${num}`,
    })),
  ];

  const episodeOptions = [
    { value: 'any', label: 'Any' },
    ...episodesNumber.episodes.map((num) => ({
      value: num,
      label: `Episode ${num}`,
    })),
  ];

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
          type: 'setFilterName',
          payload: value,
        });
      }, 500)
    );
  };

  const handleSelectChange = (option: string) => (
    selectedOption: ValueType<Select>
  ) => {
    const { value } = selectedOption as Select;
    if (value) {
      dispatch({ type: 'setFilterEpisode', payload: { option, value } });
    }
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
        autoComplete="off"
        placeholder="Name"
        value={inputState.name}
        onChange={handleChange}
        fullWidth
      />
      <div className="select--wrap">
        <Select
          fullWidth
          placeholder="Season"
          className="react-select-container"
          classNamePrefix="react-select"
          options={seasonOptions}
          onChange={handleSelectChange('season')}
          value={
            season === '' ? null : { value: season, label: `Seoson ${season}` }
          }
        />
      </div>
      <div className="select--wrap">
        <Select
          fullWidth
          placeholder="Episode"
          className="react-select-container"
          classNamePrefix="react-select"
          options={episodeOptions}
          onChange={handleSelectChange('episode')}
          value={
            episode === ''
              ? null
              : { value: episode, label: `Episode ${episode}` }
          }
        />
      </div>
      <Button
        size="small"
        color="secondary"
        fullWidth
        type="button"
        onClick={handleClick}
      >
        Reset
      </Button>
    </FilterContainer>
  );
};
