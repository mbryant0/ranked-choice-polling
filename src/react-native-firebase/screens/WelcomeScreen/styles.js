import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#ae55e6',
  },
  title: {
    fontSize: 65,
    color: 'white',
    width: '80%',
    margin: 30,
  },
  special: {
    color: '#ae55e6',
    backgroundColor: 'white',
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    color: 'white',
    borderColor: 'white',
    borderWidth: 2,
    padding: 20,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: '#2e2e2d',
  },
  footerLink: {
    color: '#788eec',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
