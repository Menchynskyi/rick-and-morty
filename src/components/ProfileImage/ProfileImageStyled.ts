import styled from 'styled-components';

export const ImageStyled = styled.img<{ isLoaded: boolean }>`
  opacity: ${({ isLoaded }) => (isLoaded ? '1' : '0')};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: all 0.2s ease-in-out;
`;
