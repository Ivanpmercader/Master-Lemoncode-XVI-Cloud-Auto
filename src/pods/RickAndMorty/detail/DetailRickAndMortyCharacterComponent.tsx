import { Button } from "@components/Button/Button";
import { DetailRickAndMortyEntity } from "@models/RickAndMorty/DetailRickAndMortyEntity";
import { Box, Container, Typography } from "@mui/material";
import { routes } from "@router/routes";
import { detailContainerStyles } from "@styles/globalStyles";
import { useNavigate } from "react-router-dom";

interface Props {
    character: DetailRickAndMortyEntity;
}

export const DetailRickAndMortyCharacterComponent: React.FC<Props> = (props) => {
    const { character } = props;
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(routes.rickMortyApi.rickMortyCharacters);
    }
    return (<>
        <Container sx={detailContainerStyles}> 
            <Button label="Back to characters" onClick={handleClick}/>
            <Box>
                <Box>
                    <img className="detailImage" src={character.image} alt={character.name}/>
                </Box>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    ID: {character.id}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    NAME: {character.name}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    GENDER: {character.gender}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    STATUS: {character.status}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    SPECIES: {character.species}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    CREATED CHARACTER: {character.created.toLocaleDateString("es-ES")}
                </Typography>
            </Box>
        </Container>        
    </>)
}