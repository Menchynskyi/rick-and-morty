import styled from 'styled-components';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 50px;

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 20px 10px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    padding: 30px;
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding: 50px;
  }
`;

export const ErrorText = styled.div`
  margin-top: 20px;
  color: ${({ theme }) => theme.colors.background.tertiary.main};
  font-size: ${({ theme }) => theme.fontSize.heading.extraLarge};
  text-align: center;

  @media ${({ theme }) => theme.device.mobileS} {
    margin-top: 10px;
    font-size: ${({ theme }) => theme.fontSize.heading.small};
  }
`;

export const Img = styled.img`
  border-radius: ${({ theme }) => theme.borderRadius};

  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
  }
`;
