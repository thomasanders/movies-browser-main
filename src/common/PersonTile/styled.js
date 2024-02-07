import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
	height: 100%;
    width: 208px;
    background-color: ${({ theme }) => theme.color.white};
    padding: 16px;
    box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
    border-radius: 5px;
    transition: transform 0.3s ease;
    text-decoration: none;

    &:hover {
    cursor: pointer;
    transform: translateY(-8px);
  };

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        border-radius: 5px;
        margin: 0 auto;
        width: 136px;
        padding: 8px;
    }
`;

export const PersonDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const PersonPhoto = styled.img`
    width: 177px;
    height: 264px;
    border-radius: 5px;
    margin-bottom: 4px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 120px;
        height: 178px;
    }
`;

export const Name = styled.p`
    text-align: center;
    font-size: 22px;
    font-weight: 500;
    line-height: 1.3;
    margin: 0;
    color: ${({ theme }) => theme.color.woodsmoke};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 14px;
    }
`;

export const Character = styled.p`
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    margin: 0;
    color: ${({ theme }) => theme.color.waterloo};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 13px;
        line-height: 1.3;
    }
`;

export const PeopleGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 16px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.smallerMobile}) {
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 16px;
    }

    @media (max-width: 490px) {
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 16px;
    }
`;