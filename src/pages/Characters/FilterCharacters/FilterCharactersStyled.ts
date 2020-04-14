import styled from 'styled-components';
import Select from 'react-select';

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 1260px;
  margin: 20px auto;
`;

export const SelectStyled = styled(Select)`
  width: 200px;
  line-height: 30px;
`;
