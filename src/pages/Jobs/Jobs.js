import React from 'react';
import {View, FlatList} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import JobCard from '../../components/JobCard';
import styles from './Jobs.style';

const Jobs = ({navigation}) => {
  const {loading, data, error} = useFetch(`${Config.API_JOBS_URL}`+'?page=1');
  const handleJobSelect = (idItem,name) => {
    navigation.navigate('JobDetail', {idItem,name});
  };
  const renderJobs = ({item}) => <JobCard job={item}
  onSelect= {()=> handleJobSelect(item.id.toString(),item.name)}
  />;
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={data.results}
        keyExtractor={item => item.id.toString()}
        renderItem={renderJobs}
      />
    </View>
  );
};

export default Jobs;
