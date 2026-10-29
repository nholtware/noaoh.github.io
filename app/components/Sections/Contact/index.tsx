import DevicePhoneMobileIcon from '@mui/icons-material/PhoneIphone';
import EnvelopeIcon from '@mui/icons-material/EmailOutlined';
import MapPinIcon from '@mui/icons-material/LocationOnOutlined';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {FC, memo} from 'react';

import {contact, HomepageSections} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import GithubIcon from '../../Icon/GithubIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
};

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
} as const;

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;
  return (
    <Section section={HomepageSections.Contact} sx={{bgcolor: 'grey.900'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 3}}>
        <Box sx={{display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: {md: 'center'}, gap: 3}}>
          <EnvelopeIcon sx={{display: {xs: 'none', md: 'block'}, fontSize: 64}} />
          <Typography component="h2" sx={{fontWeight: 'bold'}} variant="h4">
            {headerText}
          </Typography>
        </Box>
        <Box sx={{display: 'flex', flexDirection: 'column', gap: 2}}>
          <Typography sx={{color: 'grey.300'}}>{description}</Typography>
          <Box component="dl" sx={{display: 'flex', flexDirection: 'column', gap: {xs: 2, sm: 1}, m: 0}}>
            {items.map(({type, text, href}) => {
              const {Icon, srLabel} = ContactValueMap[type];
              return (
                <Box key={srLabel}>
                  <Box component="dt" sx={visuallyHidden}>
                    {srLabel}
                  </Box>
                  <Box component="dd" sx={{m: 0}}>
                    <Link
                      color="grey.300"
                      href={href}
                      sx={{display: 'inline-flex', alignItems: 'center', gap: 1.5, textDecoration: 'none', '&:hover': {color: 'primary.main'}}}
                      target="_blank">
                      <Icon aria-hidden="true" fontSize="small" sx={{color: 'grey.100'}} />
                      <span>{text}</span>
                    </Link>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Section>
  );
});

Contact.displayName = 'About';
export default Contact;
