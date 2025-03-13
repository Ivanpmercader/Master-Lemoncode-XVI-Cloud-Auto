import React from "react";
import { Card } from "@components/Card/Card";
import { Button } from "@components/Button/Button";
import { GithubMembersOrganization } from "@models/GithubMembers/GithubMembersOrganization";
import { MapGithubMemberEntityToGithubMemberCardEntity } from "@models/GithubMembers/mappers/GithubMemberEntityMapper";
import { Box, Container, TextField } from "@mui/material";
import { routes } from "@router/routes";
import { useNavigate } from "react-router-dom";
import { useDebounce } from "use-debounce";
import { Pagination } from "@components/Pagination/Pagination";
import { GithubMemberEntity } from "@models/GithubMembers/GithubMemberEntity";
import { cardListStyles, containerStyles } from "@styles/globalStyles";


interface Props {
    githubMembersOrganization: GithubMembersOrganization
}

export const GithubMembersComponent: React.FC<Props> = React.memo((props) => {
    const { githubMembersOrganization: { organization, members } } = props;
    const [filter, setFilter ] = React.useState<string>(organization.name);
    const [ debouncedFilter ] = useDebounce(filter, 500);
    const [ currentMembers, setCurrentMembers ] = React.useState<GithubMemberEntity[]>(members.list);
    const navigate = useNavigate();
    
    const handleClick = (memberLogin: string) => {
        navigate(routes.githubMembers.detailMember(memberLogin));
    };

    React.useEffect(()=> {
        organization.setOrganization(filter);
    }, [ debouncedFilter ]);

    const handlePageChange= React.useCallback((items: GithubMemberEntity[])=> {
        setCurrentMembers(items);
    }, []);
    
    return (<>       
        <Container component="section" sx={containerStyles}>
            <TextField id="search" label="Search" placeholder={filter} value={filter}
            onChange={(e) => setFilter(e.target.value)}/>
            <Button label="Search Members" onClick={members.searchMembers}/>
            <Box component="div" sx={cardListStyles}>
                {currentMembers.map((member) => (
                    <Card key={member.id} data={{...MapGithubMemberEntityToGithubMemberCardEntity(member)}} onClick={handleClick}></Card>
                ))}
            </Box>
            <Pagination items={members.list} itemsPerPage={5} onPageChange={handlePageChange}/>
        </Container>
    </>);
});