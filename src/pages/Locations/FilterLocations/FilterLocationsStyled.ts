import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1280px;
  margin: 20px auto 0 auto;
  padding: 0 17.5px;

  input {
    width: 48%;
    margin-bottom: 15px;
  }

  button {
    width: 48%;
    margin-bottom: 15px;
  }

  @media ${({ theme }) => theme.device.mobileS} {
    margin-top: 15px;
    padding: 0 10px;

    input {
      width: 100%;
    }

    button {
      width: 100%;
      margin-bottom: 0;
    }
  }

  @media ${({ theme }) => theme.device.laptop} {
    justify-content: space-around;
    margin: 40px auto 0 auto;

    input {
      width: calc(25% - 11.25px);
      margin-right: 15px;
      margin-bottom: 0;
    }

    button {
      width: calc(25% - 11.25px);
      margin-bottom: 0;
    }
  }
`;
