import styled from 'styled-components';

type MobileHeaderStyledProps = {
  mobileBarIsOpen: boolean;
};

export const MobileHeaderStyled = styled.div<MobileHeaderStyledProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background-color: ${({ theme, mobileBarIsOpen }) =>
    mobileBarIsOpen && theme.colors.background.gray.main};
`;

export const BarsButton = styled.button`
  padding: 3px 0 3px 20px;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: ${({ theme }) => theme.fontSize.text.extraLarge};
`;
