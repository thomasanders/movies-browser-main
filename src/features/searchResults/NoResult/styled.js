import styled from "styled-components";
import { ReactComponent as BigCloud } from "../../../images/big-cloud.svg";
import { ReactComponent as SmallCloud } from "../../../images/small-cloud.svg";
import { ReactComponent as PaperPlane } from "../../../images/paper-plane.svg";
import { ReactComponent as PlainTrack } from "../../../images/track.svg";

export const StyledHeader = styled.div`
    margin: 56px auto 24px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        margin: 24px auto 16px;
    }
`;

export const NoResultImage = styled.div`
    margin: 131px auto;
    width: 300px;
    height: 300px;
`;

export const Image = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    position: relative;
`;

export const StyledBigCloud = styled(BigCloud)`
    position: relative;
`;

export const StyledSmallCloud = styled(SmallCloud)`
    position: absolute;
    right: -10%;
    top: 22%;
`;

export const StyledPaperPlane = styled(PaperPlane)`
    position: absolute;
    left: -10%;
    top: 50%;
`;

export const StyledPlaneTrack = styled(PlainTrack)`
    position: absolute;
    top: 90%;
    left: 26%;
`;