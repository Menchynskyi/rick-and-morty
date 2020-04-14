import styled from 'styled-components';

export const CardContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin-bottom: 15px;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
`;

export const InfoContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  background-color: rgba(46, 46, 46, 0.8);
  transition: all 2s ease-in-out;
`;

export const CardImage = styled.img<{ isLoaded: boolean }>`
  display: ${({ isLoaded }) => (isLoaded ? 'inline' : 'none')};
`;
