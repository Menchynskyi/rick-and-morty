import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 40px auto 0 auto;
  padding: 0 17.5px;

  @media ${({ theme }) => theme.device.mobileS} {
    padding: 0 10px;
  }
`;

export const InputContainer = styled.div`
  width: 300px;
`;

export const ButtonContainer = styled.div`
  width: 300px;
`;
