import IconButton from '@mui/material/IconButton';
import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC = memo(() => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <IconButton aria-label={label} color="inherit" href={href} key={label} sx={{'&:hover': {color: 'primary.main'}}}>
          <Icon />
        </IconButton>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
