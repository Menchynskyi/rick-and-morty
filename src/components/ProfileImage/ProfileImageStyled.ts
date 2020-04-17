import styled from 'styled-components';

export const ImageStyled = styled.img<{ isLoaded: boolean }>`
  display: ${({ isLoaded }) => (isLoaded ? 'inline' : 'none')};
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.8s ease-in;
`;
