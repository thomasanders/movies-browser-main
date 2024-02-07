import { StyledIcon, Wrapper, ErrorMessage, Message, Info, Button } from "./styled";

const Error = () => (
    <Wrapper>
        <ErrorMessage>
            <StyledIcon />
            <Message>
                Ooops! Something went wrong...
            </Message>
            <Info>
                Please check your network connection<br />and try again
            </Info>
            <Button to="/">
                Back to home page
            </Button>
        </ErrorMessage>
    </Wrapper>
);

export default Error;