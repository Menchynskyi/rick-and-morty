import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 20px auto;
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const InfoList = styled.ul`
  min-width: 450px;
  margin: 0;
  padding: 0;
`;

export const InfoListItem = styled.li`
  display: flex;
  padding: 5px 0;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.text.regular};
  list-style: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.background.disabled.transparent};

  span {
    text-transform: capitalize;

    &:first-of-type {
      flex-basis: 40%;
      color: ${({ theme }) => theme.colors.background.tertiary.transparent};
    }
  }
`;
