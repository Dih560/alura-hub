import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textRepositories: {
    fontSize: 21,
    fontWeight: '600',
    color: '#45565F',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center',
  },
  list: {
    width: '100%',
  },
  repository: {
    width: '100%',
    height: 80,
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nameRepository: {
    fontSize: 16,
    color: '#444',
    fontWeight: 'bold',
  },
  dateRepository: {
    fontSize: 14,
    color: '#999',
  },
  button: {
    backgroundColor: '#8A07DA',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
  },
  buttonText: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default styles;
