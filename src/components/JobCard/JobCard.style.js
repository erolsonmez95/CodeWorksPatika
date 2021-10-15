import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    marginBottom: 10,
    borderColor: '#efefef',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontWeight: 'bold',
    fontSize:17,
    color:'#000'
  },
  location_container:{
    flexWrap:'wrap',
    marginTop:10
  },
  location: {
    backgroundColor: 'red',
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 2,
  },
  required_degree: {

    textAlign:'right',
    fontSize:16,
    fontWeight:'bold',
    color:'red',
    padding:10
}
});
