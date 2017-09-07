import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  onBoardingPopUpWrapper: {
    display: 'flex',
    width: 300,
    height: 525,
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    backgroundColor: '#353434',
    marginTop: 30,
    borderRadius: 20,
    padding: 10
  },
  onBoardingPopUpCloser: {
    alignSelf: 'flex-end',
  },
  onBoardingPopUpHeader: {
    fontSize: 18,
    textAlign: 'center',
    color: '#FFF',
    fontWeight: 'bold'
  },
  onBoardingPopUpData: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignSelf: 'flex-start',
    width: 200,
  },
  onBoardingPopUpImage: {
    marginRight: 10,
    height: 40,
    width: 40
  },
  onBoardingPopUpHighlight: {
    color: '#FFCC01',
    fontWeight: 'bold',
  },
  onBoardingPopUpText: {
    color: '#FFF',
    flexWrap: 'wrap'
  },
})