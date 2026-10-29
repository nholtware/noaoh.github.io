import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import {FC, memo} from 'react';

import {heroData, HomepageSections} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;

  return (
    <Section noPadding section={HomepageSections.Hero}>
      <Box sx={{position: 'relative', display: 'flex', height: '100vh', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
        <Box
          alt={`${name}-image`}
          component="img"
          src={imageSrc}
          sx={{position: 'absolute', inset: 0, zIndex: 0, height: '100%', width: '100%', objectFit: 'cover'}}
        />
        <Container maxWidth="lg" sx={{position: 'relative', zIndex: 1}}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 3,
              borderRadius: 3,
              bgcolor: 'rgba(31, 41, 55, 0.4)',
              p: 3,
              textAlign: 'center',
              boxShadow: 6,
              backdropFilter: 'blur(4px)',
            }}>
            <Typography component="h1" sx={{fontWeight: 'bold', fontSize: {xs: '2.25rem', sm: '3rem', lg: '4.5rem'}, lineHeight: 1.1}}>
              {name}
            </Typography>
            {description}
            <Box sx={{display: 'flex', gap: 2, color: 'grey.100'}}>
              <Socials />
            </Box>
            <Box sx={{display: 'flex', width: '100%', justifyContent: 'center', gap: 2}}>
              {actions.map(({href, text, primary, Icon}) => (
                <Button
                  color={primary ? 'primary' : 'inherit'}
                  endIcon={Icon && <Icon />}
                  href={href}
                  key={text}
                  sx={{borderRadius: 999, borderWidth: 2, '&:hover': {borderWidth: 2}, color: 'common.white'}}
                  target="_blank"
                  variant="outlined">
                  {text}
                </Button>
              ))}
            </Box>
          </Box>
        </Container>
        <Box sx={{position: 'absolute', insetInline: 0, bottom: 24, display: 'flex', justifyContent: 'center'}}>
          <Fab
            aria-label="Scroll to about"
            href={`/#${HomepageSections.About.urlName}`}
            size="small"
            sx={{bgcolor: 'common.white', color: 'grey.900', '&:hover': {bgcolor: 'grey.200'}}}>
            <KeyboardArrowDownIcon />
          </Fab>
        </Box>
      </Box>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
