import React, { PropsWithChildren } from "react";
import { GithubMemberEntity } from "@models/GithubMembers/GithubMemberEntity";
import { GithubMembersOrganization } from "@models/GithubMembers/GithubMembersOrganization";
import config from "./../config/config"

const initGithubMembersOrganization: string = config.API_ORGANIZATION;

export const GithubMembersOrganizationContext = React.createContext<GithubMembersOrganization>({
    organization: {
        name: '',
        setOrganization: (org) => {},
    },
    members: {
        list: [],
        searchMembers: () => []
    }
});

export const GithubMembersOrganizationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [organization, setOrganization ] = React.useState(initGithubMembersOrganization);    
    const [members, setMembers ] = React.useState<GithubMemberEntity[]>([]);

    React.useEffect(()=> {
        fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
        .then(setMembers);
      }, [])


    const searchMembers = React.useCallback(() => {
        fetch(`https://api.github.com/orgs/${organization}/members`)
        .then((response) => response.json())
        .then((json) => setMembers(json))
    }, [organization]);     

    const data: GithubMembersOrganization = {
        organization: {
            name: organization,
            setOrganization
        },
        members: {
            list: members,
            searchMembers
        }
    }

    return (
        // <GithubMembersOrganizationContext.Provider value={{organization: {name: organization, setOrganization}, members: {list: members, searchMembers}}}>
        <GithubMembersOrganizationContext.Provider value={data}>
            {children}
        </GithubMembersOrganizationContext.Provider>
    )
}