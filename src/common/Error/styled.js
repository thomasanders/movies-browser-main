import styled from "styled-components";
import { NavLink } from "react-router-dom"
import { ReactComponent as DangerIcon } from "../../images/danger.svg";

export const Wrapper = styled.div`
    margin-top: 180px;
    text-align: center;
`;

export const ErrorMessage = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
`;

export const StyledIcon = styled(DangerIcon)`
    max-width: 120px;
    max-height: 120px;
`;

export const Message = styled.h1`
    font-size: 36px;
    font-weight: 600;
    margin: 0;
`;

export const Info = styled.span`
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
`;

export const Button = styled(NavLink)`
    padding: 16px 14px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.color.scienceBlue};
    color: ${({ theme }) => theme.color.white};
    font-family: "Open Sans", sans-serif;
    font-size: 14px;
    font-weight: 700;
    border: none;
    text-decoration: none;
    cursor: pointer;
    
    &:hover {
        opacity: 95%;
    }
    
    &:active {
        border: 1px solid ${({ theme }) => theme.color.waterloo};
    }
`;