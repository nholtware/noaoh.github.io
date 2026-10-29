import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {FC, PropsWithChildren, useEffect, useState} from 'react';
import type {MetaFunction} from 'react-router';
import {Textfit} from 'react-textfit';

import OtherHeader from '../components/Sections/OtherHeader';
import {navLinks} from '../data/data';

export const meta: MetaFunction = () => [
  {title: 'Currently Listening'},
  {name: 'description', content: "What Noah Holt is currently listening to"},
];

interface CurrentlyListeningPayload {
  isPlaying: boolean;
  artist?: string;
  album?: string;
  song?: string;
  thumbnail?: string;
}

interface TrackProps {
  artist: string;
  album: string;
  song: string;
  thumbnail: string;
}

const Track: FC<PropsWithChildren<TrackProps>> = (props: TrackProps) => {
  return (
    <Box sx={{position: 'relative', display: 'flex', flexWrap: 'wrap', alignItems: 'center', p: 2}}>
      <Box alt="Image didn't load" component="img" height={174} src={props.thumbnail} sx={{mr: 2}} width={174} />
      <Textfit min={20} mode="multi" style={{marginLeft: 8}}>
        <strong>Artist</strong>: {props.artist}
        <br />
        <strong>Album</strong>: {props.album}
        <br />
        <strong>Song</strong>: {props.song}
      </Textfit>
    </Box>
  );
};

const NotCurrentlyListening: FC = () => {
  return (
    <Textfit min={20} mode="single">
      I am not currently listening to anything.
    </Textfit>
  );
};

const CurrentlyListening: FC = () => {
  const [currListening, setCurrListening] = useState<CurrentlyListeningPayload>({isPlaying: false});

  const getCurrentlyListening = async () => {
    const url = '/api/currentlyListening';

    const options = {
      method: 'GET',
    };

    try {
      const resp = await fetch(url, options);
      const j: CurrentlyListeningPayload = await resp.json();
      setCurrListening(j);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCurrentlyListening();

    const interval = setInterval(() => {
      if (!document.hidden) {
        getCurrentlyListening();
      }
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <OtherHeader sections={navLinks} />
      <Box sx={{display: 'flex', height: '100vh', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        <Typography component="h1" sx={{fontWeight: 'bold'}} variant="h4">
          What I'm Currently Listening to
        </Typography>
        {currListening.isPlaying ? (
          <Track
            album={currListening.album!}
            artist={currListening.artist!}
            song={currListening.song!}
            thumbnail={currListening.thumbnail!}
          />
        ) : (
          <NotCurrentlyListening />
        )}
      </Box>
    </>
  );
};

export default CurrentlyListening;
