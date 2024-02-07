import styled from "styled-components";

export const StyledHeader = styled.div`
    margin: 56px auto 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 24px auto 16px;
    }
`;