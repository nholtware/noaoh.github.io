import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import {FC, memo, PropsWithChildren, useCallback, useMemo, useState} from 'react';
import {NavLink} from 'react-router';

import {SectionType} from '../../data/dataDef';

export const headerID = 'headerNav';

interface HeaderProps {
  sections: SectionType[];
}

const getHref = (section: SectionType) =>
  section.isOnBlog ? section.urlName : section.isOnHomepage ? `/#${section.urlName}` : `/${section.urlName}`;

const Header: FC<PropsWithChildren<HeaderProps>> = memo((props: HeaderProps) => {
  const {sections} = props;
  const navSections = useMemo(() => Object.values(sections).filter(section => section.isOnNavBar), [sections]);

  return (
    <>
      <MobileNav navSections={navSections} />
      <DesktopNav navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionType[]}> = memo(({navSections}) => (
  <AppBar
    color="transparent"
    elevation={0}
    id={headerID}
    position="fixed"
    sx={{display: {xs: 'none', sm: 'block'}, bgcolor: 'rgba(23, 23, 23, 0.5)', backdropFilter: 'blur(8px)', p: 2}}>
    <Box component="nav" sx={{display: 'flex', justifyContent: 'center', gap: 4}}>
      {navSections.map(section => (
        <Box
          component={NavLink}
          key={section.urlName}
          sx={{
            color: 'grey.100',
            fontWeight: 'bold',
            textDecoration: 'none',
            transition: 'color 300ms',
            '&:hover, &.active': {color: 'primary.main'},
          }}
          to={getHref(section)}>
          {section.displayName}
        </Box>
      ))}
    </Box>
  </AppBar>
));

const MobileNav: FC<{navSections: SectionType[]}> = memo(({navSections}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen(open => !open);
  }, []);

  return (
    <Box sx={{display: {xs: 'block', sm: 'none'}}}>
      <Fab
        aria-label="Menu Button"
        color="primary"
        onClick={toggleOpen}
        size="small"
        sx={{position: 'fixed', top: 8, right: 8, zIndex: theme => theme.zIndex.appBar}}>
        <MenuIcon />
      </Fab>
      <Drawer
        slotProps={{paper: {sx: {width: '80%', bgcolor: 'grey.900'}}}}
        anchor="left"
        onClose={toggleOpen}
        open={isOpen}>
        <List component="nav" sx={{mt: 2, px: 1}}>
          {navSections.map(section => (
            <ListItemButton
              component={NavLink}
              key={section.urlName}
              onClick={toggleOpen}
              sx={{borderRadius: 1, '&.active': {bgcolor: 'grey.900', color: 'common.white', fontWeight: 'bold'}}}
              to={getHref(section)}>
              <ListItemText primary={section.displayName} />
            </ListItemButton>
          ))}
        </List>
      </Drawer>
    </Box>
  );
});

Header.displayName = 'Header';
export default Header;
