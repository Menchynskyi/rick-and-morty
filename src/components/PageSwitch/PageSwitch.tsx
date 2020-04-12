import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import {
  PageSwitchContainer,
  Button,
  PageStateContainer,
  Input,
} from './PageSwitchStyled';
import { scrollToTop } from '../../utils';

type PageSwitchProps = {
  page: number;
  setPage: (page: number) => void;
  allPages: number;
};

type InputState = {
  value: string | number;
  focused: boolean;
};

export const PageSwitch: React.FC<PageSwitchProps> = ({
  page,
  setPage,
  allPages,
}) => {
  const initialInputState = {
    value: page,
    focused: false,
  };
  const [inputState, setInputState] = useState<InputState>(initialInputState);

  const setCurrentPage = (currentPage: number) => {
    if (currentPage === page) {
      setInputState({ ...inputState, focused: false });
      return;
    }
    if (currentPage >= 1 && currentPage <= allPages) {
      scrollToTop();
      setPage(currentPage);
      setInputState({ ...inputState, focused: false });
    } else {
      setInputState(initialInputState);
    }
  };

  const handleBlur = () => {
    setCurrentPage(+inputState.value);
  };

  const handleFocus = () => {
    setInputState({ ...inputState, focused: true });
  };

  const handleClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    event.currentTarget.select();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 2) return;
    const value = +event.target.value;
    if (!Number.isNaN(value)) {
      if (value === 0) {
        setInputState({ ...inputState, value: '' });
      } else {
        setInputState({ ...inputState, value });
      }
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setCurrentPage(+inputState.value);
    }
  };

  const switchToNextPage = (currentPage: number) => {
    if (currentPage < allPages) {
      scrollToTop();
      setPage(currentPage + 1);
    }
  };
  const switchToPrevPage = (currentPage: number) => {
    if (currentPage > 1) {
      scrollToTop();
      setPage(currentPage - 1);
    }
  };

  const isFirstPage = page === 1;
  const isLastPage = page === allPages;

  return (
    <PageSwitchContainer>
      <Button
        disabled={isFirstPage}
        type="button"
        onClick={() => switchToPrevPage(page)}
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </Button>
      <PageStateContainer>
        <Input
          isFocused={inputState.focused}
          value={
            inputState.focused
              ? inputState.value
              : `${inputState.value} of ${allPages}`
          }
          onFocus={handleFocus}
          onChange={handleChange}
          onClick={handleClick}
          onBlur={handleBlur}
          onKeyPress={handleKeyPress}
        />
      </PageStateContainer>
      <Button
        disabled={isLastPage}
        type="button"
        onClick={() => switchToNextPage(page)}
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </Button>
    </PageSwitchContainer>
  );
};
