import styled, { keyframes } from "styled-components";
import { ReactComponent as Spinner } from "../../images/spinner.svg";

const rotate = keyframes`
to{
    transform: rotate(360deg);
}
`;

export const StyledHeader = styled.div`
    margin: 56px auto 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 24px auto 16px;
    }
`;

export const SpinnerSpace = styled.div`
    text-align: center;
`;

export const StyledSpinner = styled(Spinner)`
    display: inline-block;
    animation: ${rotate} 1s linear infinite;
    width: 91px;
    height: 91px;
    margin: 120px;

    @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
        width: 35px;
        height: 35px;
        margin: 24px;
    }
`;