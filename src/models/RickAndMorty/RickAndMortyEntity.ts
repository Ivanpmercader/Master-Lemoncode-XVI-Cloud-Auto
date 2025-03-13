interface comunData {
    name: string,
    url: string
}

export interface RickAndMortyEntity {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: comunData,
    location: comunData,
    image: string,
    episode: string[],
    url: string,
    created: string
}
