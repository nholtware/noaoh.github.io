import Box from '@mui/material/Box';
import {SxProps, Theme} from '@mui/material/styles';
import {FC, PropsWithChildren} from 'react';

interface GridViewProps {
  sx?: SxProps<Theme>;
}

const GridView: FC<PropsWithChildren<GridViewProps>> = ({children, sx}) => {
  return (
    <Box
      sx={[
        {
          mt: 10,
          px: 2,
          display: 'grid',
          gap: 3,
          gridTemplateColumns: {xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)'},
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}>
      {children}
    </Box>
  );
};

export default GridView;
