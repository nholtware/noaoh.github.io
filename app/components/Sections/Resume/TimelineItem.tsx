import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FC, memo} from 'react';

import {TimelineItemProps} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItemProps}> = memo(({item}) => {
  const {title, date, location, gpa, content} = item;
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', pb: 4, textAlign: {xs: 'center', md: 'left'}, '&:last-of-type': {pb: 0}}}>
      <Box sx={{display: 'flex', flexDirection: 'column', pb: 2}}>
        <Typography component="h3" sx={{fontWeight: 'bold'}} variant="h6">
          {title}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: {xs: 'center', md: 'flex-start'}, gap: 1}}>
          <Typography sx={{fontWeight: 500, fontStyle: 'italic'}} variant="body2">
            {location}
          </Typography>
          <span>•</span>
          <Typography variant="body2">{date}</Typography>
          {gpa && (
            <>
              <span>•</span>
              <Typography variant="body2">
                <strong>GPA:</strong> {gpa}
              </Typography>
            </>
          )}
        </Box>
      </Box>
      {content}
    </Box>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
