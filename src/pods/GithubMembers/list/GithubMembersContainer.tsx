import { GithubMembersOrganizationContext } from '@contexts/GithubMembersContext';
import React from 'react';
import { GithubMembersComponent } from './GithubMembersComponent';

export const GithubMembersContainer: React.FC = () => {
    const githubMembersOrganization = React.useContext(GithubMembersOrganizationContext);
    return <GithubMembersComponent githubMembersOrganization = {githubMembersOrganization}/>
}