import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FC, memo, PropsWithChildren} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  return (
    <Box sx={{display: 'flex', flexDirection: 'column'}}>
      <Typography sx={{textAlign: 'center', fontWeight: 'bold'}} variant="h6">
        {name}
      </Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 1}}>
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </Box>
    </Box>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType}> = memo(({skill}) => {
  const {name} = skill;

  return (
    <Typography sx={{ml: 1, fontWeight: 500}} variant="body2">
      {name}
    </Typography>
  );
});

Skill.displayName = 'Skill';
