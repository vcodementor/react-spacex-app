import React from 'react';
import { Card, CardMedia,CardActions, CardActionArea,CardHeader, Avatar,CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';
import defaultImage from '../../assets/images/spacex.webp';

const LaunchCard = ({ launch }) => {
  return (
    <Card>
      <CardActionArea component={Link} to={`/launch/${launch?.id}`} >
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src={launch?.links?.mission_patch_small || defaultImage}
            />
          }
          title={launch?.mission_name}
          subheader={`${moment(launch?.launch_date_local).format('MMMM Do YYYY, h:mm:ss a')}`}
        />
        <CardMedia
          component="img"
          alt={launch.mission_name}
          image={launch?.links?.mission_patch ? launch?.links?.mission_patch : defaultImage}
          style={{ height: '194', objectFit: 'cover', }} 
        />
        <CardContent>
          <Typography variant="body1" gutterBottom>{` 🚀 ${launch?.rocket?.rocket_name}`}</Typography>
          {launch?.launch_site?.site_name ? <Typography variant="subtitle1" gutterBottom>{`${launch?.launch_site?.site_name }`}</Typography> : null }
        </CardContent>
        <CardActions>
          <Button component={Link} to={`/launch/${launch?.id}`}  size="small" color="primary">Details</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default LaunchCard;
