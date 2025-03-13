import { Button } from "@components/Button/Button";
import { DetailGithubMemberEntity } from "@models/GithubMembers/DetailGithubMemberEntity"
import { Box, Container, Typography } from "@mui/material";
import { routes } from "@router/routes";
import { detailContainerStyles } from "@styles/globalStyles";
import { useNavigate } from "react-router-dom";

interface Props {
    member: DetailGithubMemberEntity;
}

export const DetailGithubMemberComponent: React.FC<Props> = (props) => {
    const { member } = props;
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(routes.githubMembers.members);
    }
    return (<>
        <Container sx={detailContainerStyles}> 
            <Button label="Back to members" onClick={handleClick}/>
            <Box>
                <Box>
                    <img className="detailImage" src={member.avatarUrl} alt={member.login}/>
                </Box>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    ID: {member.id}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    LOGIN: {member.login}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1, display: {lg: 'flex'}, whiteSpace: 'nowrap' }}
                >
                    TYPE: {member.type}
                </Typography>
            </Box>
        </Container>        
    </>)
}