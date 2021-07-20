import styled from "@emotion/styled";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  max-height: fit-content;
`;
