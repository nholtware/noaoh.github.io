import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {SxProps, Theme} from '@mui/material/styles';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionType} from '../../data/dataDef';

const Section: FC<PropsWithChildren<{section: SectionType; sectionTitle?: string; noPadding?: boolean; sx?: SxProps<Theme>}>> =
  memo(({children, section, noPadding = false, sx}) => {
    return (
      <Box
        component="section"
        id={section.urlName}
        sx={[
          !noPadding && {px: {xs: 2, lg: 4}, py: {xs: 8, md: 12}},
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}>
        {noPadding ? children : <Container disableGutters maxWidth="lg">{children}</Container>}
      </Box>
    );
  });

Section.displayName = 'Section';
export default Section;
