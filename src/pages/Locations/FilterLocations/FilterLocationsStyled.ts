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

export const ButtonContainer = styled.div`
  width: 300px;
`;
