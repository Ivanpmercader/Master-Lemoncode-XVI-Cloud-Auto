export interface GithubMemberEntity {
    id: number,
    login: string,
    avatar_url:string,
    gravatar_id: string,
    gists_url: string,
    html_url: string,
    followers_url: string,
    following_url: string,
    events_url: string,
    received_events_url: string,
    node_id: string;
    organizations_url: string,
    repos_url: string;
    site_admin: boolean,
    starred_url: string,
    subscriptions_url: string,
    type: string,
    user_view_type: string,
    url: string,
}