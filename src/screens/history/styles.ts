import {HDP, RF} from '@helpers';
import {family, palette} from '@theme';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: palette.white,
    position: 'relative',
    paddingHorizontal: HDP(24),
    flexDirection: 'column',
  },
  pageWrap: {
    backgroundColor: palette.white,
    flex: 1,
  },
  mainLabel: {
    fontSize: RF(18),
    fontFamily: family.Bold,
    color: palette.asphalt,
  },
  subLabel: {
    fontSize: RF(14),
    fontFamily: family.Bold,
    color: palette.chalice,
  },
  statGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: HDP(10),
    justifyContent: 'center',
  },
  statBox: {
    backgroundColor: '#C598AF30',
    alignItems: 'center',
    width: '45%',
    paddingVertical: HDP(20),
  },
  statValue: {
    fontSize: RF(16),
    fontFamily: family.Bold,
    color: palette.blueBlack,
    textAlign: 'center',
  },
  statKey: {
    fontSize: RF(12),
    fontFamily: family.Medium,
    color: palette.blueBlack,
    textAlign: 'center',
  },
  switchContainer: {
    width: HDP(60),
    height: HDP(35),
    borderRadius: HDP(20),
    padding: HDP(5),
  },
  switchThumb: {
    width: HDP(30),
    height: HDP(30),
    borderRadius: HDP(20),
  },
  toggleView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  toggleText: {
    fontSize: RF(18),
    fontFamily: family.Medium,
    color: palette.blueBlack,
    textAlign: 'center',
  },
  locationGrid: {
    flexDirection: 'row',
    gap: HDP(20),
    alignSelf: 'center',
  },
  statErr: {
    fontSize: RF(8),
    fontFamily: family.Regular,
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
