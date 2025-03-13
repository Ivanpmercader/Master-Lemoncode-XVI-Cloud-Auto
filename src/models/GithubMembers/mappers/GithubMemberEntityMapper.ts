import { GithubMemberEntity } from "@models/GithubMembers/GithubMemberEntity"
import { CardEntity } from "@models/components/Card/CardEntity"

export const MapGithubMemberEntityToGithubMemberCardEntity = (member: GithubMemberEntity): CardEntity => ({
    id: member.login,
    title: member.login,
    image: member.avatar_url
})