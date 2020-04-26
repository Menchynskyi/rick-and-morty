import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1260px;
  margin: 40px auto 0 auto;
  padding: 0 7.5px;
`;

export const InputStyled = styled.input`
  width: 300px;
  min-height: 38px;
  padding: 12px 12px;
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.background.secondary.hover};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  color: ${({ theme }) => theme.colors.text.primary};
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.background.secondary.main};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.background.secondary.main};
  }
`;

export const SelectContainer = styled.div`
  width: 300px;
  color: ${({ theme }) => theme.colors.text.primary};

  .react-select-container {
    height: 100%;
  }

  .react-select__control {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.primary};
    border: 1px solid ${({ theme }) => theme.colors.background.secondary.hover};
    border-radius: ${({ theme }) => theme.borderRadius};
    box-shadow: none;
    color: ${({ theme }) => theme.colors.text.primary};
    cursor: text;
    transition: all 0.2s;

    &:focus {
      box-shadow: none;
      border-color: ${({ theme }) => theme.colors.background.secondary.main};
    }

    &:hover {
      border-color: ${({ theme }) => theme.colors.background.secondary.main};
    }
  }
  .react-select__indicator-separator {
    display: none;
  }
  .react-select__indicator {
    color: ${({ theme }) => theme.colors.background.disabled.main};
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
  .react-select__menu {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.secondary.main};
    border-radius: ${({ theme }) => theme.borderRadius};
  }
  .react-select__option {
    &:first-of-type {
      border-top-left-radius: calc(${({ theme }) => theme.borderRadius} / 1.5);
      border-top-right-radius: calc(${({ theme }) => theme.borderRadius} / 1.5);
    }
    &:last-of-type {
      border-bottom-left-radius: calc(
        (${({ theme }) => theme.borderRadius} / 1.5)
      );
      border-bottom-right-radius: calc(
        (${({ theme }) => theme.borderRadius} / 1.5)
      );
    }
  }
  .react-select__option--is-selected {
    background-color: ${({ theme }) => theme.colors.background.tertiary.main};
  }
  .react-select__option--is-focused {
    color: ${({ theme }) => theme.colors.background.secondary.main};
    background-color: ${({ theme }) => theme.colors.text.primary};
  }
  .react-select__placeholder {
    color: ${({ theme }) => theme.colors.text.secondary};
  }
  .react-select__input,
  .react-select__single-value {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  .react-select__value-container {
    padding: 2px 12px;
    text-transform: capitalize;
  }
`;

export const ButtonContainer = styled.div`
  width: 300px;
`;
