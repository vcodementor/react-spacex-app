import React from 'react';
import { Card, CardMedia,CardActions, CardActionArea,CardHeader, Avatar,CardContent, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import moment from 'moment';

const LaunchCard = ({ launch }) => {
  return (
    <Card>
      <CardActionArea href={`/launch/${launch?.id}`}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src={launch?.links?.mission_patch_small || ""}
            />
          }
          title={launch?.mission_name}
          subheader={`${moment(launch?.launch_date_local).format('MMMM Do YYYY, h:mm:ss a')}`}
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
