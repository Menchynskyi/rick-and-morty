import styled from 'styled-components';

export const ImageStyled = styled.img<{ isLoaded: boolean }>`
  display: ${({ isLoaded }) => (isLoaded ? 'inline' : 'none')};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s ease-in-out;
`;
