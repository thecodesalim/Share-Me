import React from 'react'
import { StyleSheet, Text, View} from 'react-native'

export default class Users extends React.Component {
  render(){
    return(
        <View style={styles.member} >
            <View style={styles.circle}></View>
            <Text>{this.props.name}</Text>     
        </View>
      
    )
  }
}

const styles = StyleSheet.create({
    calloutView: {
        flexDirection: "row",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: 10,
        width: "80%",
        marginLeft: "30%",
        marginRight: "30%",
        marginTop: 20
      },
      circle: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'yellow',
    },
    member: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 20,
        height: 30,
        marginTop: 10,
        borderColor: "transparent",
        marginLeft: 10,
        width: "90%",
        marginRight: 10,
        height: 40,
        borderWidth: 0.0 , 
        paddingTop: 5
    },
});
