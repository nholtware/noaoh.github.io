import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import {FC, memo} from 'react';

export type IconProps = SvgIconProps;

const Icon: FC<IconProps> = memo(({children, ...props}) => (
  <SvgIcon viewBox="0 0 128 128" {...props}>
    {children}
  </SvgIcon>
));

export default Icon;
