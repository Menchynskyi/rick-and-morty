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

export const ResetButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  min-height: 38px;
  padding: 12px;
  border: 1px solid ${({ theme }) => theme.colors.background.tertiary.hover};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.background.disabled.main : 'inherit'};
  color: ${({ theme }) => theme.colors.background.tertiary.hover};
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  text-transform: capitalize;
  transform: scale(1);
  transition: background-color 0.2s, color 0.2s, transform 0.1s;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.99);
  }

  &:hover {
    ${({ disabled, theme }) =>
      !disabled &&
      `
        cursor: pointer;
        background-color: ${theme.colors.background.tertiary.main};
        color: ${theme.colors.text.primary};
      `}
  }
`;
