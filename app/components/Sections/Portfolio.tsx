import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {HomepageSections, portfolioItems} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section section={HomepageSections.Portfolio} sx={{bgcolor: 'grey.900'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', gap: 4}}>
        <Typography component="h2" sx={{alignSelf: 'center', fontWeight: 'bold'}} variant="h5">
          Check out some of my work
        </Typography>
        <Box sx={{width: '100%', columnCount: {xs: 2, md: 3, lg: 4}}}>
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <Box key={`${title}-${index}`} sx={{pb: 3}}>
                <Box sx={{position: 'relative', height: 'max-content', width: '100%', overflow: 'hidden', borderRadius: 2, boxShadow: 6}}>
                  <Box alt={title} component="img" src={image} sx={{width: '100%', display: 'block'}} />
                  <ItemOverlay item={item} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <Box
      component="a"
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      sx={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        bgcolor: 'grey.900',
        color: 'common.white',
        textDecoration: 'none',
        transition: 'opacity 300ms',
        opacity: showOverlay ? 0.8 : 0,
        ...(!mobile && {'&:hover': {opacity: 0.8}}),
      }}
      target="_blank">
      <Box sx={{position: 'relative', height: '100%', width: '100%', p: 2}}>
        <Box sx={{display: 'flex', height: '100%', width: '100%', flexDirection: 'column', gap: 1, overflowY: 'auto'}}>
          <Typography component="h2" sx={{textAlign: 'center', fontWeight: 'bold'}} variant="subtitle1">
            {title}
          </Typography>
          <Typography sx={{fontSize: {xs: '0.75rem', sm: '0.875rem'}}}>{description}</Typography>
        </Box>
        <OpenInNewIcon sx={{position: 'absolute', bottom: {xs: 4, sm: 8}, right: {xs: 4, sm: 8}, fontSize: 16}} />
      </Box>
    </Box>
  );
});
