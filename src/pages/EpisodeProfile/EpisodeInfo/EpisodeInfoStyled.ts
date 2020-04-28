import styled from 'styled-components';

export const EpisodeInfoContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  max-width: 900px;
  margin: 40px auto;
`;

export const EpisodeTitle = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.heading.small};
`;

export const PlotTitle = styled.h2`
  margin: 0 0 15px 0;
  font-weight: normal;
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.background.tertiary.transparent};
`;

export const PlotContainer = styled.div`
  margin-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  line-height: 1.7em;
`;

export const InnerContainer = styled.div`
  display: flex;
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
  padding: 2px 0 2px 30px;
  font-size: ${({ theme }) => theme.fontSize.text.large};
`;

export const ImdbContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};

  span {
    &:last-of-type {
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
    color: ${({ theme }) => theme.colors.text.secondary};
    font-size: ${({ theme }) => theme.fontSize.text.regular};
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 300px;
  min-height: 170px;
  background-color: ${({ theme }) => theme.colors.skeleton.main};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
