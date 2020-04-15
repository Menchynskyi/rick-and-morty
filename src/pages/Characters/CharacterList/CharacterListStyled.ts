import styled from 'styled-components';

export const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1260px;
  margin: 10px auto;

  & > span {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    & > span {
      margin-bottom: 15px;
      border-radius: ${({ theme }) => theme.borderRadius};
    }
  }
`;

export const PageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1260px;
  margin: 10px auto 20px auto;
  padding: 0 7.5px;
`;
