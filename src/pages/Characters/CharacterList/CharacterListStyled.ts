import styled from 'styled-components';

export const CharacterListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1260px;
  margin: 10px auto;
  padding: 0;

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

export const CharacterListItem = styled.li`
  margin-bottom: 15px;
  list-style: none;
`;

export const PageSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  max-width: 1260px;
  margin: 10px auto 20px auto;
  padding: 0 7.5px;
`;
