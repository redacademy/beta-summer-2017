import {
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  colors,
  typography
} from '../../config/styles';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
  },
  lgHeight: {
    height: Dimensions.get('window').height,
  },
  quoteContainer: {
    textAlign: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  speakerImage: {
    height: 85,
    width: 85,
    borderRadius: 10,
    left: -30,
  },
  titleText: {
    backgroundColor: 'transparent',
    textAlign: 'center',
    color: colors.black,
    fontFamily: typography.fontMainBold,
    fontSize: typography.robotoBold20,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  speakerContainer: {
    maxHeight: 110,
    backgroundColor: colors.darkGrey,
    width: 250,
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20
  }
});