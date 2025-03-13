import { RickAndMortyEntity } from "../RickAndMortyEntity"
import { CardEntity } from "@models/components/Card/CardEntity"

export const MapRickAndMortyEntityToRickAndMortyrCardEntity = (character: RickAndMortyEntity): CardEntity => ({
    id: String(character.id),
    title: character.name,
    image: character.image
})