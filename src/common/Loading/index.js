import { StyledHeader, SpinnerSpace, StyledSpinner } from "./styled";
import Header from "../Header";
import { GlobalWrapper } from "../GlobalWrapper/styled";

const Loading = () => (
    <GlobalWrapper>
        <StyledHeader>
            <Header text="" />
            <SpinnerSpace>
                <StyledSpinner />
            </SpinnerSpace>
        </StyledHeader>
    </GlobalWrapper>
);

export default Loading;