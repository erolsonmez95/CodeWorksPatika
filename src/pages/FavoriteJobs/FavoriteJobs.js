import React from 'react';
import {View, FlatList} from 'react-native';
import FavoriteCard from '../../components/FavoriteCard';
import {useSelector} from 'react-redux';

const FavoriteJobs = ({navigation}) => {
  const favorites = useSelector(favorite => favorite.favoriteList);

  const handleJobSelect = (id, item) => {
    navigation.navigate('JobDetail', {id, item});
  };

  const renderFavorites = ({item}) => {
    return (
      <FavoriteCard
        job={item}
        onSelect={() => handleJobSelect(item.id, item)}
      />
    );
  };

  return (
    <View>
      {favorites.length > 0 ? (
        <FlatList data={favorites} renderItem={renderFavorites} />
      ) : (
        <View></View>
      )}
    </View>
  );
};

export default FavoriteJobs;
