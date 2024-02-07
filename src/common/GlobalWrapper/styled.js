import styled from "styled-components";

export const GlobalWrapper = styled.div`
    width: 1368px;
    max-width: 90%;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    	width: 1020px;
  	};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	width: 672px;
  	};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    };
`;