import {Alert} from 'react-native';

export default (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITEJOB':
      const {job} = action.payload;

      const filtered = state.favoriteList.find(item => item.id === job.id);

      let newList = [];

      if (filtered) {
        Alert.alert('Warning','You already add the job to your favorities.');

        return state;
      } else {
        newList = [...state.favoriteList, job];

        return {...state, favoriteList: newList};
      }

    case 'REMOVE_FAVORITEJOB':
      const {id} = action.payload;

      const list = state.favoriteList.filter(item => item.id !== id);

      return {...state, favoriteList: list};

    default:
      return state;
  }
};