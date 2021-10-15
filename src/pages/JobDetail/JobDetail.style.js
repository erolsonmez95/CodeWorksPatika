import {Dimensions, StyleSheet} from 'react-native';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  work_detail: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingLeft: 5,
  },
  content_title: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'red',
  },

  content_text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#000',
    paddingLeft: 10,
  },

  detail_title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000003',
    textAlign: 'center',
  },
  body_container: {
    padding: 10,
  },
  image: {
    width: deviceSize.width,
    height: deviceSize.height / 3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontStyle: 'italic',
    marginVertical: 5,
  },
  footer: {
    flexDirection:'row',
    justifyContent:'space-around'
    },
});
