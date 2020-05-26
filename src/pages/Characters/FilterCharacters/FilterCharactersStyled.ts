import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  margin: 40px auto 20px auto;
  padding: 0 17.5px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 300px;
  & input:first-child {
    margin-bottom: 10px;
  }
`;
