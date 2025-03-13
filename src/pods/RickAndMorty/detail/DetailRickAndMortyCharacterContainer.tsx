import React from 'react';
import { DetailRickAndMortyCharacterComponent } from './DetailRickAndMortyCharacterComponent';
import { MapRickAndMortyEntityToDetailRickAndMortyEntity } from '@models/RickAndMorty/mappers/DetailRickAndMortyEntityMapper';
import { RickAndMortyEntity } from '@models/RickAndMorty/RickAndMortyEntity';

interface Props {
    id: string;
}

export const DetailRickMortyCharacterContainer: React.FC<Props> = (props) => {
    const {id} = props;
    const [ character, setCharacter ] = React.useState<RickAndMortyEntity>({} as RickAndMortyEntity);

     if (id) {
            React.useEffect(()=> {
                fetch(`https://rickandmortyapi.com/api/character/${id}`)
                    .then((response) => response.json())
                    .then((json) => setCharacter(json))
            }, []);
        }
    
    return <DetailRickAndMortyCharacterComponent character={{...MapRickAndMortyEntityToDetailRickAndMortyEntity(character)}}/>
}