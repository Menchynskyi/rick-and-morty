import styled from 'styled-components';

export const LocationContainer = styled.div`
  max-width: 940px;
  margin: 15px auto;
  padding: 0 20px;

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 0 10px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin: 40px auto;
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
`;

export const LocationTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  font-weight: normal;
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
