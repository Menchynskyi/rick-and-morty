import styled from 'styled-components';

export const EpisodeInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
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

export const EpisodeTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  font-weight: normal;
`;

export const PlotTitle = styled.h2`
  margin: 0 0 15px 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background.tertiary.transparent};
`;

export const PlotContainer = styled.div`
  margin-top: 10px;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  line-height: 1.7em;

  @media ${({ theme }) => theme.device.mobileS} {
    margin-top: 20px;
  }

  @media ${({ theme }) => theme.device.laptop} {
    margin-top: 40px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

  @media ${({ theme }) => theme.device.tablet} {
    flex-wrap: nowrap;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoContainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 2px 0 2px 0px;
  font-size: ${({ theme }) => theme.fontSize.text.large};

  @media ${({ theme }) => theme.device.mobileS} {
    margin-bottom: 0;
  }
`;

export const ImdbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};

  span {
    &:last-of-type {
      margin-left: 20px;

      svg {
        margin-left: 10px;
        color: #dba506;
      }
    }
  }
`;

export const ExtraInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.regular};

  span:last-of-type {
    margin-left: 20px;

    svg {
      margin-right: 5px;
    }
  }
`;

export const ShortInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};

  span:last-of-type {
    margin-left: 20px;
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.text.regular};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 300px;
  min-height: 170px;
  margin-right: 15px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.colors.skeleton.main};
  border-radius: ${({ theme }) => theme.borderRadius};

  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
    margin-bottom: 15px;
    margin-right: 0;

    & img {
      width: 100%;
    }
  }

  @media ${({ theme }) => theme.device.tablet} {
    margin-right: 30px;
  }
`;
