import { StyleSheet, Text } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  header: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'blue',
    flexDirection: 'row',
  },
  footer: {
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: 'blue',
    flexDirection: 'row'
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
  },
  author: {
    color: 'white',
    fontWeight: 'bold',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  gameboard: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gameinfo: {
    backgroundColor: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  row: {
    marginTop: 20,
    padding: 10
  },
  flex: {
    flexDirection: "row"
  },
  button: {
    margin: 30,
    flexDirection: "row",
    padding: 10,
    backgroundColor: "grey",
    width: 150,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color:"#2B2B52",
    fontSize: 20,
    textAlign: 'center'
  }
});