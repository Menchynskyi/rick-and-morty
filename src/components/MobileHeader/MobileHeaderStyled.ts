import styled from 'styled-components';

export const MobileHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
`;

export const BarsButton = styled.button`
  padding: 3px 0;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
`;
