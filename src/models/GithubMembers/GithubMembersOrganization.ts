import { GithubMemberEntity } from "./GithubMemberEntity";

export interface GithubMembersOrganization {
    organization: {
        name: string;
        setOrganization: (org: string) => void;
    },
    members: {
        list: GithubMemberEntity[];
        searchMembers: () => void;
    }
}
