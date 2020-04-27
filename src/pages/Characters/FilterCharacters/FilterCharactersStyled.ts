import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1260px;
  margin: 40px auto 20px auto;
  padding: 0 7.5px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 300px;
  & input:first-child {
    margin-bottom: 10px;
  }
`;

export const SelectContainer = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};

  .react-select__control {
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
    & input {
      margin-bottom: 0;
    }
  }
  .react-select__value-container {
    padding: 2px 12px;
    text-transform: capitalize;
  }
`;
