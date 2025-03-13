import React from 'react';
import { GithubMemberEntity } from '@models/GithubMembers/GithubMemberEntity';
import { MapGithubMemberEntityToDetailGithubMemberEntity } from '@models/GithubMembers/mappers/DetailGithubMemberEntityMapper';
import { DetailGithubMemberComponent } from './DetailGithubMemberComponent';

interface Props {
    login: string;
}

export const DetailGithubMemberContainer: React.FC<Props> = (props) => {
    const { login } = props;
    const [ member, setMember ] = React.useState<GithubMemberEntity>({} as GithubMemberEntity);

    if (login) {
        React.useEffect(()=> {
            fetch(`https://api.github.com/users/${login}`)
                .then((response) => response.json())
                .then((json) => setMember(json))
        }, []);
    }

    return <DetailGithubMemberComponent member={{...MapGithubMemberEntityToDetailGithubMemberEntity(member)}}/>
}