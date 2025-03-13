import { Button as MuiButton} from "@mui/material";
import React from "react";

interface Props {
    label: string,
    onClick: () => void
}

export const Button: React.FC<Props> = React.memo((props:Props) => {
   const { label, onClick } = props;
   return (
        <MuiButton variant="contained" color="secondary" onClick={onClick}>
           {label}
        </MuiButton>
    )
});