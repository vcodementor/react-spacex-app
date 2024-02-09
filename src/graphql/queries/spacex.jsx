import { gql } from '@apollo/client';

export const GET_SPACEX_LIST = gql`
  query GetSpaceXLaunches($limit: Int!, $offset: Int!) {
    launches(limit: $limit, offset: $offset) {
      id
      mission_name
      launch_date_local
      launch_success
      details
      rocket {
        rocket_name
        rocket_type
      },
      launch_site{
        site_id
        site_name
        site_name_long
      },
      links {
        mission_patch,
        mission_patch_small,
        article_link,
        wikipedia,
        video_link,
        flickr_images
      },
      upcoming,
      static_fire_date_utc,
      static_fire_date_unix,
    }
  }
`;

export const GET_SPACEX_DETAIL = gql`
  query GetSpaceXLaunches($id: ID!){
    launch(id: $id) {
      id
      mission_name
      launch_date_local
      launch_success
      details
      rocket {
        rocket_name
        rocket_type
      },
      launch_site{
        site_id
        site_name
        site_name_long
      },
      links {
        mission_patch,
        mission_patch_small,
        article_link,
        wikipedia,
        video_link,
        flickr_images
      },
      upcoming,
      static_fire_date_utc,
      static_fire_date_unix,
    }
  }
`;