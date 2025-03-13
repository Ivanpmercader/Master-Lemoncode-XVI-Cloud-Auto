import { RickAndMortyEntity } from "../RickAndMortyEntity";
import { DetailRickAndMortyEntity } from "../DetailRickAndMortyEntity";

export const MapRickAndMortyEntityToDetailRickAndMortyEntity =  (character: RickAndMortyEntity): DetailRickAndMortyEntity => ({
    id: character.id,
    name: character.name,
    status: character.status,
    species: character.species,
    gender: character.gender,
    image: character.image,
    created: new Date(character.created) 
})