import React from 'react';
import { RickAndMortyEntity } from '@models/RickAndMorty/RickAndMortyEntity';
import { Box, Container, TextField } from '@mui/material';
import { Card } from '@components/Card/Card';
import { Pagination } from "@components/Pagination/Pagination";
import { cardListStyles, containerStyles } from '@styles/globalStyles';
import { MapRickAndMortyEntityToRickAndMortyrCardEntity } from '@models/RickAndMorty/mappers/RickAndMortyEntityMapper';
import { useNavigate } from 'react-router-dom';
import { routes } from '@router/routes';

interface Props {
    characters: RickAndMortyEntity[];
    filter: string;
    setFilter: React.Dispatch<React.SetStateAction<string>>
}

export const RickAndMortyCharactersComponent: React.FC<Props> = (props) =>{
    const { characters, filter, setFilter } = props;
    const [ currenCharacters, setCurrentCharacters ] = React.useState<RickAndMortyEntity[]>([]);

    const navigate = useNavigate();
        
    const handleClick = (character: string) => {
        navigate(routes.rickMortyApi.detailRickMortyCharacter(character));
    };
    
    const handlePageChange= React.useCallback((items: RickAndMortyEntity[])=> {
        setCurrentCharacters(items);
    }, [])
    
    
    return (<>
        <Container component="section" sx={containerStyles}>
            <TextField id="search" label="Search" placeholder={filter} value={filter}
            onChange={(e) => setFilter(e.target.value)}/>
            <Box component="div" sx={cardListStyles}>
                {currenCharacters.map((character) => (
                    <Card key={character.id} data={{...MapRickAndMortyEntityToRickAndMortyrCardEntity(character)}} onClick={handleClick}></Card>
                ))}
            </Box>
            <Pagination items={characters} itemsPerPage={10} onPageChange={handlePageChange}/>
        </Container>
    </>)
}