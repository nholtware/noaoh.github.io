import StarIcon from '@mui/icons-material/Star';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {FC, useEffect, useState} from 'react';
import type {MetaFunction} from 'react-router';

import GridView from '../components/GridView';
import Header from '../components/Sections/OtherHeader';
import {navLinks} from '../data/data';

export const meta: MetaFunction = () => [
  {title: 'My HN Favorites'},
  {name: 'description', content: "Noah Holt's Hacker News favorites"},
];

const FavoriteCard = ({fav}: {fav: any}) => {
  const {by, itemUrl, score, title} = fav;

  return (
    <Card sx={{maxWidth: 'sm', p: 1.5, bgcolor: 'common.black', boxShadow: 6}}>
      <CardContent>
        <Typography gutterBottom sx={{fontWeight: 'bold'}} variant="h6">
          {title}
        </Typography>
        <Typography sx={{color: 'grey.400', mb: 2}} variant="body2">
          By: {by}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Link href={itemUrl} rel="noopener noreferrer" target="_blank">
            View Submission
          </Link>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <StarIcon sx={{color: 'warning.main'}} />
            <Typography sx={{color: 'grey.300'}}>{score}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const HnFavoritesPage: FC = () => {
  const [hnFavoritesList, setHnFavoritesList] = useState<{ favorites: any[] }>({favorites: []});
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/api/hnFavorites');
        if (!resp.ok) {
          console.error(resp);
          setHasError(true);
        }

        const result = await resp.json();
        setHnFavoritesList(result);
      } catch (err) {
        console.error(err);
        setHasError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [])

  if (loading) {
    return <Typography>Loading...</Typography>;
  } else if (hasError) {
    return <Typography>An error occurred while retrieving my hacker news favorites.</Typography>;
  }

  return (
    <>
      <Header sections={navLinks} />
      <Box sx={{height: 24}} />
      <GridView>
        {hnFavoritesList.favorites.map((fav: any) => (
          <FavoriteCard fav={fav} key={fav.id}/>
        ))}
      </GridView>
    </>
  );
}

export default HnFavoritesPage;
