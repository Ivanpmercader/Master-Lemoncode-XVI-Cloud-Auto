import { StackLinkItem } from '@models/StackLinkItem';
import { Typography, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';

interface Props {
    links: StackLinkItem
}

const linkStyles = { 
    width: 200, 
    height: 200, 
    border: ' 5px solid', 
    borderRadius: 10, 
    display: 'flex', 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
};


export const StackItem: React.FC<Props> = (props) => {
    const { links, links: {icon: Icon } } = props;

    return <>
    <MuiLink component={Link} to={links.route} sx={linkStyles}>
        {Icon && <Icon sx={{ fontSize: 100 }}/>}
        <Typography variant="h6" component="span">
            {links.textItem}
        </Typography>
    </MuiLink>
</>
}