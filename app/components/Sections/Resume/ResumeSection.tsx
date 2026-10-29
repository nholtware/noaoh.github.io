import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        py: 4,
        gridTemplateColumns: {xs: '1fr', md: 'repeat(4, 1fr)'},
        '&:first-of-type': {pt: 0},
        '&:last-of-type': {pb: 0},
      }}>
      <Box sx={{display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'}}}>
        <Box sx={{position: 'relative', height: 'max-content'}}>
          <Typography component="h2" sx={{fontWeight: 'bold', textTransform: 'uppercase', color: 'grey.800'}} variant="h6">
            {title}
          </Typography>
          <Box component="span" sx={{position: 'absolute', insetInline: 0, bottom: -4, borderBottom: 2, borderColor: 'primary.light'}} />
        </Box>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', gridColumn: {md: 'span 3'}}}>{children}</Box>
    </Box>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
