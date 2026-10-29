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
  {title: 'My Github Stars'},
  {name: 'description', content: "Noah Holt's starred GitHub repositories"},
];

const RepoCard = ({repo}: {repo: any}) => {
  const {htmlUrl, description, name, fullName, stargazersCount} = repo;

  return (
    <Card sx={{maxWidth: 'sm', p: 1.5, bgcolor: 'common.black', boxShadow: 6}}>
      <CardContent>
        <Typography gutterBottom sx={{fontWeight: 'bold'}} variant="h6">
          {name}
        </Typography>
        <Typography sx={{color: 'grey.300', mb: 2}}>{description}</Typography>
        <Typography sx={{color: 'grey.400', mb: 2}} variant="body2">
          Full Name: {fullName}
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Link href={htmlUrl} rel="noopener noreferrer" target="_blank">
            View Repository
          </Link>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <StarIcon sx={{color: 'warning.main'}} />
            <Typography sx={{color: 'grey.300'}}>{stargazersCount}</Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

const GithubStarsListPage: FC = () => {
  const [githubStarsList, setGithubStarsList] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch('/api/githubStars');
        if (!resp.ok) {
          console.error(resp);
          setHasError(true);
        }

        const result = await resp.json();
        setGithubStarsList(result);
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
    return <Typography>An error occurred while retrieving my github stars</Typography>;
  }

  return (
    <>
      <Header sections={navLinks} />
      <Box sx={{height: 24}} />
      <GridView>
      {githubStarsList.map((item) => {
        const {nodeId} = item;
        return (
          <div key={nodeId}>
            <RepoCard repo={item} />
          </div>
        )
      })}
      </GridView>
    </>
  );
}

export default GithubStarsListPage;
