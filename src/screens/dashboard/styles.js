import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    drawerImage: {
      width: '200%', 
      height: '100%', 
      marginLeft: 15, 
      marginBottom: 20
    },
    topImageBackground: {
      width: '100%',
      height: '100%'
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start'
    },
    mainContainer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center'
    },
    innerContainer: {
      flexDirection: 'row',
      flex: 4,
      justifyContent: 'space-evenly'
    }
  })

  export default styles