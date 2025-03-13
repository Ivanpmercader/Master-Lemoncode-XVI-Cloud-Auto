import React from 'react';
import { CardEntity } from '@models/components/Card/CardEntity';
import { Card as MuiCard, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';


interface Props {
    data: CardEntity;
    onClick: (login: string) => void
}


export const Card: React.FC<Props> = (props) => {
    const { data, onClick } = props;
    return (
        <MuiCard sx={{ width: 200 }} key={data.id} onClick={() => onClick(data.id)}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    image={data.image}
                    alt={data.title}
                    width={100}
                    height={200}
                />
                <CardContent>
                    <Typography variant="h6" component="div">
                    {data.title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
}