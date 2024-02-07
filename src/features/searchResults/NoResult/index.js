import { GlobalWrapper } from "../../../common/GlobalWrapper/styled";
import Header from "../../../common/Header";
import { StyledHeader, StyledBigCloud, StyledSmallCloud, NoResultImage, StyledPaperPlane, StyledPlaneTrack, Image } from "./styled";

const NoResult = ({ query }) => (
    <GlobalWrapper>
        <StyledHeader>
            <Header text={`Sorry, there are no results for "${query}"`} />
            <NoResultImage>
                <Image>
                    <StyledBigCloud />
                    <StyledSmallCloud />
                    <StyledPaperPlane />
                    <StyledPlaneTrack />
                </Image>
            </NoResultImage>
        </StyledHeader>
    </GlobalWrapper>
);

export default NoResult;