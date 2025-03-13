import React from 'react';
import { DetailGithubMemberContainer } from '@pods/GithubMembers';
import { useParams } from 'react-router-dom';

export const DetailGithubMemberScene: React.FC = () => {
    
    const { login } = useParams(); 

    return <DetailGithubMemberContainer login={login}/>
}