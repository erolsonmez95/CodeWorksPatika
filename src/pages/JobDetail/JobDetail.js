import React from 'react';
import {View, ScrollView, Text, Dimensions, Alert} from 'react-native';
import Config from 'react-native-config';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import useFetch from '../../hooks/useFetch';
import styles from './JobDetail.style';
import RenderHtml from 'react-native-render-html';
import Button from '../../components/Button';
import {useDispatch} from 'react-redux';

const Detail = ({route}) => {
  const {idItem} = route.params;
  const {loading, error, data} = useFetch(`${Config.API_JOBS_URL}/${idItem}`);
  const dispatch = useDispatch();
  const source = {
    html: `${data.contents}`,
  };

  const handleFav = job => {
    if (job) {
      if (job.status == 'Error') {
        Alert.alert('Job', 'Job does not found');
      } else {
        dispatch({type: 'SET_FAVORITEJOB', payload: {job}});
      }
    }
  };

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{data.name}</Text>
      <View style={styles.work_detail}>
        <Text style={styles.content_title}>Locations:</Text>
        <Text style={styles.content_text}>
          {data.locations && data.locations.length > 0
            ? data.locations[0].name
            : 'Unknown Location'}
        </Text>
      </View>
      <View style={styles.work_detail}>
        <Text style={styles.content_title}>Job Level:</Text>
        <Text style={styles.content_text}>
          {data.levels && data.levels.length > 0
            ? data.levels[0].name
            : 'Any Level'}
        </Text>
      </View>
      <Text style={styles.detail_title}>Job Detail</Text>

      <ScrollView>
        <RenderHtml
          baseStyle={styles.description}
          contentWidth={Dimensions.get('window').width}
          source={source}
        />
      </ScrollView>
      <View style={styles.footer}>
        <Button
          text="Submit"
          onPress={() => {
            Alert.alert('Submit', 'You have submitted to job');
          }}
          loading={loading}
          iconName="send"
        />
        <Button
          text="Favorite Job"
          onPress={() => handleFav(data)}
          loading={loading}
          iconName="heart"
        />
      </View>
    </View>
  );
};

export default Detail;
