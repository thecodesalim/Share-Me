import React from 'react'
import { StyleSheet, Text, View, Button} from 'react-native'

export default class Profile extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={{margin: 10, paddingTop: 20}}>Salim Abubakar</Text>
                    <Text>Portsmouth</Text>
                    <View style={styles.button}><Text style={styles.text}>Edit Profile</Text></View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1
    },

    box:{
        marginTop: 20,
        width: '100%',
        height: '40%',
        backgroundColor: '#EDEDED',
        flexDirection: 'column',
        alignItems: 'center',
        shadowColor: 'blue',
        padding: 10,
    },

    text: {
        marginTop: 10,
        borderRadius: 12,
        borderColor: 'black',
        color: 'black',
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 12,
        textAlign:'center',
    },
    button: {
        marginTop: 200,
        margin: 20,
        borderStyle: 'solid',
        borderWidth: 1,
        width: 100 ,
        backgroundColor: 'white',
        height: 50,
        borderRadius: 12,
        borderColor: 'black',
    }
  })