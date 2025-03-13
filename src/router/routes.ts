import { generatePath } from 'react-router-dom';

interface GithubMembers {
    members: string;
    detailMember: string;
}

interface RickMorty {
    rickMortyCharacters: string;
    detailRickMortyCharacter: string;
}

const githubMembersRoutes: GithubMembers = {
    members: "/github-members",
    detailMember: '/github-members/:login',
}

const rickMortyRoutes : RickMorty = {
    rickMortyCharacters: "/rick-and-morty-characters",
    detailRickMortyCharacter: '/rick-and-morty-detail-character/:id',
}

interface SwitchRoutes {
    home: string
    githubMembers: GithubMembers;
    rickMortyApi: RickMorty;
    notFound: string;
}

export const switchRoutes: SwitchRoutes = {
    home: "/",
    githubMembers: githubMembersRoutes,
    rickMortyApi: rickMortyRoutes,  
    notFound: "*"
}

//Union types to replace detail screens of GithubMembers and RickMorty
type ReplacedDetailMember = Omit<GithubMembers, 'detailMember'> & {
    detailMember: (login: string) => string;
}

type ReplacedDetailRickMortyCharacter = Omit<RickMorty, 'detailRickMortyCharacter'> & {
    detailRickMortyCharacter: (id: string) => string;
};

//More clear routes with types
interface Routes extends Omit<SwitchRoutes, 'githubMembers' | 'rickMortyApi'> {
    githubMembers: ReplacedDetailMember;
    rickMortyApi: ReplacedDetailRickMortyCharacter;
}

export const routes: Routes = {
    ...switchRoutes,
    githubMembers: {
        ...githubMembersRoutes,
        detailMember: login => generatePath(githubMembersRoutes.detailMember, { login }),
    },
    rickMortyApi: {
        ...rickMortyRoutes,
        detailRickMortyCharacter: id => generatePath(rickMortyRoutes.detailRickMortyCharacter, { id })
    }
}