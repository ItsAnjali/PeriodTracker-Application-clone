import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffe6e6',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 20,
  },
  dayIndicator: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  dateText: {
    fontSize: 16,
    color: '#000',
  },
  selectedDateText: {
    fontWeight: 'bold',
    color: '#ff6666',
  },
  circle: {
    borderWidth: 2,
    borderColor: '#ff6666',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#ff6666',
    borderRadius: 25,
    padding: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default styles;
