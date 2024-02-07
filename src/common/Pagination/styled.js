import styled from "styled-components";
import { PaginationButton } from "./PaginationButton";
import { ReactComponent as PrevIcon } from "../../images/prev.svg";
import { ReactComponent as NextIcon } from "../../images/next.svg";

export const Wrapper = styled.div`
    margin: 56px auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const First = styled(PaginationButton)`
    margin-right: 12px;
    background-color: ${({ theme }) => theme.color.pattensBlue};

    &:disabled {
        background-color: ${({ theme }) => theme.color.mystic};
        cursor: default;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: 8px;
    };
`;

export const Previous = styled(PaginationButton)`
    background-color: ${({ theme }) => theme.color.pattensBlue};

    &:disabled {
        background-color: ${({ theme }) => theme.color.mystic};
        cursor: default;
    }
`;

export const PrevVector = styled(PrevIcon)`
    width: 7px;
    height: 11px;

    path {
        fill: ${props => (props.disabled ? "#7E839A" : "#0044CC")}; 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 5px;
        height: 8px;
    };
`;

export const PageNumberContainer = styled.div`
    margin: 0 24px;
    display: inline-flex;
    gap: 8px;
    font-size: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 10px;
        margin: 0 8px;
        gap: 2px;
    };
`;

export const Page = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
`;

export const PageNumber = styled.p`
    font-weight: 600;
`;

export const Of = styled.p`
    color: ${({ theme }) => theme.color.waterloo};
`;

export const PagesAmount = styled.p`
    font-weight: 600;
`;

export const Next = styled(PaginationButton)`
    margin-right: 15px;
    background-color: ${({ theme }) => theme.color.pattensBlue};

    &:disabled {
        background-color: ${({ theme }) => theme.color.mystic};
        cursor: default;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-right: 8px;
    };
`;

export const Last = styled(PaginationButton)`
    background-color: ${({ theme }) => theme.color.pattensBlue};

    &:disabled {
        background-color: ${({ theme }) => theme.color.mystic};
        cursor: default;
    }
`;

export const NextVector = styled(NextIcon)`
    width: 7px;
    height: 11px;

    path {
        fill: ${props => (props.disabled ? "#7E839A" : "#0044CC")}; 
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 5px;
        height: 8px;
    };
`;