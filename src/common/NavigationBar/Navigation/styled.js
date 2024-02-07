import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../../images/logo.svg";

export const StyledNavigation = styled.nav`
    display: flex;
    gap: 80px;
	width: 100%;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
	    justify-content: space-between;
	    gap: 19px;
        margin-bottom: 16px;
    };
`;

export const List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 12px;
    list-style: none;
    padding: 0;
`;

export const Header = styled(NavLink)`
  	text-decoration: none;
  	display: flex;
  	flex-direction: row;
  	align-items: center;
  	gap: 12px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	gap: 8px;
  	};
`;

export const Logo = styled(LogoIcon)`
  	height: 40px;
  	width: 40px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	height: 17px;
    	width: 17px;
  	};
`;

export const Caption = styled.h1`
  	color: ${({ theme }) => theme.color.white};
  	font-size: 24px;
  	font-weight: 500;
  	letter-spacing: -1.5px;
  	width: 168px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	font-size: 13px;
    	letter-spacing: -0.5px;
    	width: 95px;
  	};
`;

export const PageLink = styled(NavLink)`
  	color: ${({ theme }) => theme.color.white};
  	text-decoration: none;
  	font-weight: 600;
  	font-size: 14px;
  	text-transform: uppercase;
  	padding: 14px 24px;
  	border-radius: 24px;
  	border: 1px solid ${({ theme }) => theme.color.black};
  	transition: all 0.3s ease;

  	&:hover {
    	color: ${({ theme }) => theme.color.silver};
  	};

  	&.active {
    	border-color: ${({ theme }) => theme.color.white};
  	};

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 12px;
		padding: 8px 12px;
	};
`;