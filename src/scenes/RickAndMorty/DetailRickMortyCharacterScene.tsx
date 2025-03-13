import React from 'react';
import { DetailRickMortyCharacterContainer } from '@pods/RickAndMorty';
import { useParams } from 'react-router-dom';

export const DetailRickMortyCharacterScene: React.FC = () => {

    const {id} = useParams();

    return <DetailRickMortyCharacterContainer id={id}/>
}