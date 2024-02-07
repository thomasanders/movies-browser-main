import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../../images/search.svg";

export const StyledSearchBar = styled.div`
    background: ${({ theme }) => theme.color.white};
    max-width: 432px;
    width: 100%;
    height: 48px;
    border: 1px solid ${({ theme }) => theme.color.mystic};
    border-radius: 33px;
    padding: 12px 24px;
    margin: 0 0 0 80px;
    display: flex;
    gap: 16px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      	margin: 0 0 16px;
        max-width: 1140px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
      	margin: 0 0 12px;
    };
`;

export const Icon = styled(SearchIcon)`
    height: 24px;
    width: 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 16px;
        width: 16px;
  	};
`;

export const Input = styled.input`
  	color: ${({ theme }) => theme.color.waterloo};
  	width: 100%;
  	height: 200%;
  	font-size: 16px;
  	font-weight: 400;
  	line-height: 150%;
  	border: none;

  	&:focus {
    	outline: none;
  	};

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	font-size: 13px;
  	};
`;