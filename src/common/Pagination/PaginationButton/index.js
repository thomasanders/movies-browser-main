import styled from "styled-components";

export const PaginationButton = styled.button`
    display: flex;
    padding: 8px 16px;
    align-items: center;
    gap: 8px;
    border-radius: 5px;
    border: none;
    font-size: 14px;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        gap: 4px;
    };
`;