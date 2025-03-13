import { GithubMemberEntity } from "../GithubMemberEntity";
import { DetailGithubMemberEntity } from "../DetailGithubMemberEntity";

export const MapGithubMemberEntityToDetailGithubMemberEntity =  (member: GithubMemberEntity): DetailGithubMemberEntity => ({
    id: member.id,
    login: member.login,
    siteAdmin: member.site_admin,
    type: member.type,
    avatarUrl: member.avatar_url,
})