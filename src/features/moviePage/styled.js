import styled from "styled-components";

export const MovieWrapper = styled.div`
    margin-bottom: 13%;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: 600;
    line-height: 120%;
	margin: 5% auto 2.5%;

	@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
		font-size: 20px;
		font-weight: 600;
		line-height: 130%;
	}
`;