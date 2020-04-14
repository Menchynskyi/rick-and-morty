import styled from 'styled-components';

export const CharacterListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1260px;
  margin: 0 auto;

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
