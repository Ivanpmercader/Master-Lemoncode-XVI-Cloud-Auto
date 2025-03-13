import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface StackLinkItem {
    route: string,
    textItem: string,
    icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string; }
}