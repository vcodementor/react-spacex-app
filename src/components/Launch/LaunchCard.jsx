import React from 'react';
import { Card, CardMedia,CardActions, CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';

const LaunchCard = ({ launch }) => {
  return (
    <Card>
      {/* <CardMedia
        component="img"
        alt={launch?.mission_name}
        image={launch?.links?.mission_patch_small}
      /> */}
      <CardContent>
        <Typography variant="h6" gutterBottom>{launch?.mission_name}</Typography>
        <Typography variant="body2" gutterBottom> 🚀 {`${launch?.rocket?.rocket_name}`}</Typography>
        {/* <Typography variant="body2" gutterBottom>{`${launch?.launch_site?.site_name}`}</Typography> */}
        <Typography variant="body2" gutterBottom>{`${moment(launch?.launch_date_utc).format('MMMM Do YYYY, h:mm:ss a')}`}</Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/launch/${launch?.id}`}  size="small" color="primary">Details</Button>
      </CardActions>
    </Card>
  );
};

export default LaunchCard;
