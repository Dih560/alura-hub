import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#8A07DA',
    marginTop: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    paddingHorizontal: 20,
    fontSize: 16,
    color: '#444',
    marginTop: 20,
    borderRadius: 8,
    height: 44,
    width: '90%',
  },
});

export default styles;
