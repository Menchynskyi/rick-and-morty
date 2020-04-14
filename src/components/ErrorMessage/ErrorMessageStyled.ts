import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
`;

export const ErrorText = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.background.tertiary.main};
  font-size: ${({ theme }) => theme.fontSize.heading.extraLarge};
`;

export const Img = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};
`;
