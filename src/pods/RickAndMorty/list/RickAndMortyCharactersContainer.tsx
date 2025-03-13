import { RickAndMortyEntity } from '@models/RickAndMorty/RickAndMortyEntity';
import React from 'react';
import { useDebounce } from 'use-debounce';
import { RickAndMortyCharactersComponent } from './RickAndMortyCharactersComponent';

export const RickMortyCharactersContainer: React.FC = () => {
    const [characters, setCharacters] = React.useState<RickAndMortyEntity[]>([]);
    const [filter, setFilter] = React.useState<string>('');
    const [ debouncedFilter ] = useDebounce(filter, 500);

    React.useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/?name=${filter}`)
            .then((response) => response.json())
            .then((json) => {
                json?.error ? setCharacters([]): setCharacters(json.results);
            })
    }, [debouncedFilter]);

    return <RickAndMortyCharactersComponent characters={characters} filter={filter} setFilter={setFilter}/>
}