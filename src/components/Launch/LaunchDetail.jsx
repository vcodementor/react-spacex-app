import React from 'react';
import { Card, CardMedia,CardContent, Typography, Link, Grid, Chip, Button, IconButton } from '@mui/material';
import moment from 'moment';

const LaunchDetail = ({ launch }) => {
    console.log(launch);
  const { mission_name, launch_date_utc, launch_success, launch_site, details, rocket, links,static_fire_date_utc } = launch;

  return (
    <Card style={{ maxWidth: 800, margin: 'auto', marginTop: '1.5rem', marginBottom: '1.5rem' }}>
      <CardContent style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {/* <CardMedia
          component="img"
          alt={launch.mission_name}
          image={links?.mission_patch}
          style={{ width: '50vw', height: 'auto', objectFit: 'cover', }} 
        /> */}
      </CardContent>
      <CardContent>
        <Typography variant="h4" gutterBottom>
          {mission_name}
        </Typography>
        <Typography variant="body1">{details}</Typography>
        <Grid container spacing={2} style={{ marginTop: '0.5rem' }}>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Launch Details:</Typography>
            <Typography variant="body1">
              Launch Date: {moment(launch_date_utc).format('MMMM Do YYYY, h:mm:ss a')}
            </Typography>
            <Typography variant="body1">Launch Site: {launch_site?.site_name_long}</Typography>
            <Typography variant="body1">Launch Success: {launch_success ? 'Yes' : 'No'}</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Payload Details:</Typography>
            {rocket?.second_stage?.payloads.map((payload, index) => (
              <Chip
                key={index}
                label={`${payload.payload_id} - ${payload.payload_type}`}
                style={{ marginRight: '0.5rem', marginBottom: '0.5rem' }}
              />
            ))}
          </Grid>
          <Grid item xs={12}>
            <iframe
              title="SpaceX Launch Video"
              width="560"
              height="315"
              src={`http://www.youtube.com/embed/${ links?.video_link.split("?v=")[1]}`}
              frameBorder="0"
              allowFullScreen
              style={{ maxWidth: '100%', borderRadius: '8px' }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1">Useful Links:</Typography>
            <Button href={links?.wikipedia} target="_blank" rel="noopener" variant="contained" style={{ marginRight: '0.5rem' }}>
              Wikipedia
            </Button>
            <Button href={links?.article_link} target="_blank" rel="noopener" variant="contained" style={{ marginRight: '0.5rem' }}>
              Read more
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default LaunchDetail;
