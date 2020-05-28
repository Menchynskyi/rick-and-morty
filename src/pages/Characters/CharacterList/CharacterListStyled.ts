import styled from 'styled-components';

export const CharacterListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1280px;
  margin: 0 auto;
  padding: 10px 10px;

  & > span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .react-loading-skeleton {
      margin-bottom: 15px;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 20px 10px 10px 10px;

    .react-loading-skeleton {
      width: calc(100vw - 20px) !important;
      height: calc(100vw - 20px) !important;
    }
  }

  @media ${({ theme }) => theme.device.desktop} {
    padding: 20px 10px;
  }
`;

export const CharacterListItem = styled.li`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  width: 315px;
  list-style: none;

  @media ${({ theme }) => theme.device.mobileS} {
    width: 100%;
  }
`;

export const PageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1260px;
  margin: 10px auto 20px auto;
  padding: 0 7.5px;

  @media ${({ theme }) => theme.device.mobileS} {
    margin-top: 0;
    height: 60px;
  }
`;
