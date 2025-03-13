import { HomeScene, GithubMembersScene, DetailGithubMemberScene, RickMortyCharactersScene, DetailRickMortyCharacterScene} from "@scenes/index";
import { switchRoutes } from "./routes";
import { Navigate, Route, Routes } from "react-router-dom";

const RedirectToHome = () => <Navigate to={switchRoutes.home}/>;

export const AppRouter: React.FC = () => {
    return (
        <Routes>
          <Route path={switchRoutes.home} Component={HomeScene}/>
          <Route path={switchRoutes.githubMembers.members} Component={GithubMembersScene}/> 
          <Route path={switchRoutes.githubMembers.detailMember} Component={DetailGithubMemberScene}/> 
          <Route path={switchRoutes.rickMortyApi.rickMortyCharacters} Component={RickMortyCharactersScene}/> 
          <Route path={switchRoutes.rickMortyApi.detailRickMortyCharacter} Component={DetailRickMortyCharacterScene}/> 
          <Route path={switchRoutes.notFound} Component={RedirectToHome} />
        </Routes>
    )
  }