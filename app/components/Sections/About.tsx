import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FC, memo} from 'react';

import {aboutData, HomepageSections} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  return (
    <Section section={HomepageSections.About} sx={{bgcolor: 'grey.900'}}>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: {xs: '1fr', md: profileImageSrc ? 'repeat(4, 1fr)' : '1fr'},
        }}>
        {!!profileImageSrc && (
          <Box sx={{display: 'flex', justifyContent: {xs: 'center', md: 'flex-start'}}}>
            <Box sx={{position: 'relative', overflow: 'hidden', borderRadius: 3, width: {xs: 96, md: 128}, height: {xs: 96, md: 128}}}>
              <Box
                alt="about-me-image"
                component="img"
                src={profileImageSrc}
                sx={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover'}}
              />
            </Box>
          </Box>
        )}
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 3, gridColumn: {md: profileImageSrc ? 'span 3' : 'span 1'}}}>
          <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
            <Typography component="h2" sx={{fontWeight: 'bold'}} variant="h4">
              About me
            </Typography>
            <Typography sx={{color: 'grey.300'}}>{description}</Typography>
          </Box>
          <Box component="ul" sx={{display: 'grid', gap: 2, gridTemplateColumns: {xs: '1fr', sm: 'repeat(2, 1fr)'}, listStyle: 'none', m: 0, p: 0}}>
            {aboutItems.map(({label, text, Icon}, idx) => (
              <Box component="li" key={idx} sx={{display: 'flex', alignItems: 'flex-start', gap: 1}}>
                {Icon && <Icon fontSize="small" />}
                <Typography sx={{fontWeight: 'bold'}} variant="body2">
                  {label}:
                </Typography>
                <Typography sx={{color: 'grey.300'}} variant="body2">
                  {text}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Section>
  );
});

About.displayName = 'About';
export default About;
