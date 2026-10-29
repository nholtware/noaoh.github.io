import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import {FC, memo} from 'react';

import {HomepageSections} from '../../data/data';
import Socials from '../Socials';

const Footer: FC = memo(() => (
  <Box sx={{position: 'relative', bgcolor: 'grey.900', px: {xs: 2, sm: 4}, pt: {xs: 6, sm: 7}, pb: {xs: 3, sm: 4}}}>
    <Box sx={{position: 'absolute', insetInline: 0, top: {xs: -16, sm: -24}, display: 'flex', justifyContent: 'center'}}>
      <Fab
        aria-label="Back to top"
        href={`/#${HomepageSections.Hero.urlName}`}
        size="small"
        sx={{bgcolor: 'grey.100', color: 'grey.900', '&:hover': {bgcolor: 'common.white'}}}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Box>
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3}}>
      <Box sx={{display: 'flex', gap: 2, color: 'grey.500'}}>
        <Socials />
      </Box>
      <Typography sx={{color: 'grey.700'}} variant="body2">
        © Copyright 2022 Noah Holt
      </Typography>
    </Box>
  </Box>
));

Footer.displayName = 'Footer';
export default Footer;
