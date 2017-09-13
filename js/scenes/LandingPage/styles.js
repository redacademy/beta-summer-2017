import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  landingLogo: {
    flexDirection: 'row',
    height: 125,
    width: 300,
    marginTop: 150
  },
  landingWrapper: {
    backgroundColor: '#000',
    ...StyleSheet.absoluteFillObject,
    display: 'flex',
    flex: 2,
    alignItems: 'center'
  },
  landingSubWrapper: {
    marginTop: 150,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  linkText: {
    textDecorationLine: 'underline',
    color: '#FFF',
    marginTop: 25,
    fontSize: 18
  },
  linkSubText: {
    textDecorationLine: 'underline',
    color: '#FFF',
    marginTop: 25,    
  }
})