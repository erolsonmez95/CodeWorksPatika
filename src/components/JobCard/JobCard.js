import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import styles from './JobCard.style';

const JobCard = ({job, onSelect}) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Text style={styles.title}>{job.name}</Text>
        <Text>Spinklr</Text>
        <View style={styles.location_container}>
          <Text style={styles.location}>
            {job.locations && job.locations.length > 0
              ? job.locations[0].name
              : 'Unknown Location'}
          </Text>
        </View>
        <Text style={styles.required_degree}>
          {job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'Any Level'}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default JobCard;
