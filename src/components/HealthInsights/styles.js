import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  insightsHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  insightsList: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  insightCard: {
    width: width * 0.6,
    padding: 15,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
    elevation: 2,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#ff6666',
  },
  insightContent: {
    fontSize: 14,
    color: '#000',
  },
});

export default styles;
