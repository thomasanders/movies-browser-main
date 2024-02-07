import styled from "styled-components";

export const StyledHeader = styled.h1`
    font-size: 36px;
    margin: 0;
    word-break: break-word;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 28px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
      font-size: 18px;
    }
`;