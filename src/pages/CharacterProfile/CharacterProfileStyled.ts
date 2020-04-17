import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  max-width: 1260px;
  margin: 20px auto;
`;

export const InfoContainer = styled.div`
  display: flex;
`;

export const InfoList = styled.ul`
  min-width: 500px;
  margin: 0;
  padding: 0 20px;
`;

export const InfoListItem = styled.li`
  display: flex;
  padding: 5px 0;
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.text.large};
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
