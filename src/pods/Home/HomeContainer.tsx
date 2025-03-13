import React from 'react';
import { Container, Divider, Stack } from '@mui/material';
import {routes} from '@router/routes';
import GitHubIcon from '@mui/icons-material/GitHub';
import BiotechIcon from '@mui/icons-material/Biotech';
import { StackItem } from '@components/StackItem/StackItem';
import { StackLinkItem } from '@models/StackLinkItem';

const homeContainerStyles = {
    display: 'flex' , 
    justifyContent: 'center', 
    alignItems: 'center'
}

const dividerStack = <Divider orientation="vertical" flexItem />;

const linkItems: StackLinkItem[] = [
    {
        route: routes.githubMembers.members,
        textItem: "MEMBERS",
        icon: GitHubIcon
    },
    {
        route: routes.rickMortyApi.rickMortyCharacters,
        textItem: "RICK & MORTY",
        icon: BiotechIcon
    },
]

export const HomeContainer: React.FC = () => {
    return <>
        <Container sx={{padding: 2}}>
            <Stack direction="row" divider={dividerStack} spacing={2} sx= {homeContainerStyles} >
                {
                    linkItems.map((item)=> (
                        <StackItem key={item.textItem} links={item}></StackItem>
                    ))
                }
            </Stack>
        </Container>
    </>
}