import { Container, PersonDataContainer, PersonPhoto, Name, Character } from "./styled";
import { imageURL } from "../API/APIData";
import noPhoto from "../../images/no-person.svg"

const PersonTile = ({ id, name, character, poster }) => (
    <Container to={`/people/${id}`}>
        <PersonDataContainer>
            {poster ? (
                <PersonPhoto src={imageURL + "w185" + poster} alt="Famous person" />
            ) : (
                <PersonPhoto src={noPhoto} alt="Logo" />
            )}
            <Name>
                {name}
            </Name>
            <Character>
                {character}
            </Character>
        </PersonDataContainer>
    </Container >
);

export default PersonTile;