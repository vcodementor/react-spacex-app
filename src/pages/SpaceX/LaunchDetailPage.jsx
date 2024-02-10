import React ,{useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container ,Button} from '@mui/material';
import { fetchLaunchDetail } from '../../redux/Launch/LaunchAction';
import LaunchDetail  from '../../components/Launch/LaunchDetail';
import Loader from '../../components/Layout/Loader';
import ErrorAlert from '../../components/Layout/ErrorAlert';

const LaunchDetailPage = () => {

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    if(id){
      dispatch(fetchLaunchDetail({ 'id': id }));
    }
  }, [dispatch,id]);

  const {launchDetail,status,error} = useSelector((state) => state.launch);

  return (
    <Container>
      {status === 'loading' && (
        <Loader />
      )}
      {status === 'failed' && (
        <ErrorAlert error={error} />
      )}
      {status === 'succeeded' && launchDetail && (
        <>
          <LaunchDetail  launch={launchDetail} />
        </>
      )}
    </Container>
  );
};

export default LaunchDetailPage;
