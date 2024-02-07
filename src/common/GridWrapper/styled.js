import styled from "styled-components";

export const GridWrapper = styled.div`
    width: 1368px;
    max-width: 90%;
    margin: 0 auto;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.narrow}) {
    	width: 904px;
  	};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    	width: 672px;
  	};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 592px;
    };

    @media (max-width: ${({ theme }) => theme.breakpoints.smallerMobile}) {
        width: 440px;
    };

    @media (max-width: 490px) {
        width: 288px;
    };
`;