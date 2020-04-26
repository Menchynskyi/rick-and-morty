import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToggleThumb, ToggleContainer, InputStyled } from './ToggleStyled';

type ToggleProps = {
  leftIcon?: any; //eslint-disable-line
  rightIcon?: any; //eslint-disable-line
  isChecked?: boolean;
  handleToggle?: () => void;
};

export const Toggle: React.FC<ToggleProps> = ({
  leftIcon,
  rightIcon,
  handleToggle,
  isChecked,
}) => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const [state, setState] = useState({
    isChecked: !!isChecked,
    isTarget: false,
  });
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const checkbox = checkboxRef.current;
    if (event.target !== checkbox) {
      event.preventDefault();
      checkbox!.focus();
      checkbox!.click();
      if (handleToggle) {
        handleToggle();
      }
      return;
    }
    setState((prev) => {
      return {
        ...prev,
        isChecked: !prev.isChecked,
      };
    });
  };

  const handleFocus = () => {
    setState((prev) => {
      return {
        ...prev,
        isTarget: true,
      };
    });
  };

  const handleBlur = () => {
    setState((prev) => {
      return {
        ...prev,
        isTarget: false,
      };
    });
  };

  return (
    <ToggleContainer onClick={handleClick} isChecked={state.isChecked}>
      {leftIcon && <FontAwesomeIcon icon={leftIcon} />}
      {rightIcon && <FontAwesomeIcon icon={rightIcon} />}
      <ToggleThumb isChecked={state.isChecked} isTarget={state.isTarget} />
      <InputStyled
        ref={checkboxRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        type="checkbox"
        aria-label="Switch between Dark and Light mode"
      />
    </ToggleContainer>
  );
};
