import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import {FC, memo} from 'react';

import {education, experience, HomepageSections, skills} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import {SkillGroup} from './Skills';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section section={HomepageSections.Resume} sx={{bgcolor: 'grey.100', color: 'grey.900'}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <ResumeSection title="Work Experience">
          {experience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <Divider sx={{borderBottomWidth: 2}} />
        <ResumeSection title="Skills">
          <Typography sx={{pb: 4}}>
            I have worked primarily in backend systems written in Node.JS or C#, but have started looking at frontend to
            develop this site.
          </Typography>
          <Box sx={{display: 'grid', gridTemplateColumns: {xs: '1fr', md: 'repeat(2, 1fr)'}}}>
            {skills.map((skillgroup, index) => (
              <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
            ))}
          </Box>
        </ResumeSection>
        <Divider sx={{borderBottomWidth: 2}} />
        <ResumeSection title="Education">
          {education.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
      </Box>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
