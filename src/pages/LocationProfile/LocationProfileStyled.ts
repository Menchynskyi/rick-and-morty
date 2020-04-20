import styled from 'styled-components';

export const LocationContainer = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const LocationTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
