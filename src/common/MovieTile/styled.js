import styled from "styled-components";
import { ReactComponent as RatingStar } from "../../images/rating.svg";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
	display: flex;
	flex-direction: column;
	gap: 16px;
	height: 100%;
	padding: 16px;
	border-radius: 5px;
	background: ${({ theme }) => theme.color.white};
	box-shadow: 0px 4px 12px 0px rgba(186, 199, 213, 0.50);
	transition: transform 0.3s ease;
   	text-decoration: none;

    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
    };
  
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: row;
    };
`;

export const MovieDataContainer = styled.div`
	display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 8px;
`;

export const Poster = styled.img`
    border-radius: 5px;
    width: 292px;
  	height: 434px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    	width: 114px;
		height: 169px
  	};
`;

export const LogoImage = styled.img`
  	width: 120px;
  	height: 120px;
  	margin: auto;
`;

export const Info = styled.div`
  	display: flex;
  	flex-direction: column;
  	gap: 8px;
`;

export const Title = styled.h2`
  	font-size: 22px;
  	line-height: 130%;
  	font-weight: 500;
  	color: ${({ theme }) => theme.color.woodsmoke};
  	margin: 14px 0 8px;
  	word-wrap: break-word;
  	margin: 0;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	font-size: 16px;
  	};
`;

export const CharacterAndYearElements = styled.div`
	display: flex;
	flex-wrap: wrap;
	grid-gap: 0px;
`;

export const Character = styled.p`
	font-size: 16px;
  	line-height: 150%;
  	font-weight: 400;
  	color: ${({ theme }) => theme.color.waterloo};
  	margin: 0 5px 0 0 ;

  	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    	font-size: 13px;
  	};
`;

export const Year = styled.p`
  	font-size: 16px;
  	line-height: 150%;
  	font-weight: 400;
  	color: ${({ theme }) => theme.color.waterloo};
  	margin: 0;

  	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    	font-size: 13px;
  	};
`;

export const YearInParentheses = styled(Year)`
`;

export const GenreTags = styled.ul`
  	list-style: none;
  	margin: 0 0 10px;
  	display: flex;
  	flex-direction: row;
  	gap: 8px;
  	justify-content: flex-start;
  	flex-wrap: wrap;
  	padding: 0;
`;

export const Tag = styled.li`
  	font-size: 14px;
  	font-weight: 400;
  	line-height: 140%;
  	background: ${({ theme }) => theme.color.mystic};
  	color: ${({ theme }) => theme.color.woodsmoke};
  	border-radius: 5px;
  	padding: 8px 16px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	font-size: 10px;
    	padding: 4px 8px;
  	};
`;

export const Stats = styled.div`
  	display: flex;
  	align-items: center;
  	margin-top: auto;
  	gap: 12px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	gap: 7px
  	};
`;

export const RatingIcon = styled(RatingStar)`
  	height: 24px;
  	width: 24px;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	height: 16px;
    	width: 16px;
    	margin-right: 1px;
  	};
`;

export const Rating = styled.p`
  	color: ${({ theme }) => theme.color.woodsmoke};
  	font-size: 16px;
  	font-weight: 600;
  	line-height: 100%;
  	margin: 0;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	font-size: 13px;
  	};
`;

export const Votes = styled.p`
  	color: ${({ theme }) => theme.color.waterloo};
  	line-height: 100%;
  	margin: 0;

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	font-size: 13px;
  	};
`;

export const MoviesGrid = styled.div`
  	display: grid;
  	grid-gap: 24px;
  	grid-template-columns: repeat(4, 1fr);

  	@media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    	grid-template-columns: repeat(3, 1fr);
  	};

  	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	grid-template-columns: repeat(2, 1fr);
  	};

  	@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    	display: flex;
    	flex-direction: column;
    	gap: 16px;
  	};
`;