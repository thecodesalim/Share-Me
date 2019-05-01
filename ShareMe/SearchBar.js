import React from 'react'
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native'
import { MapView, Location, Permissions, Marker, Callout } from 'expo'


export default class SearchBar extends React.Component {
    render(){
        return (
            <View style={styles.bar}>
                
                <View style={{paddingTop:20}}> 
                <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}/>
                </View>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
   bar: {
       width: 300,
       height: 100,
       flexDirection: 'column',
       backgroundColor: 'pink'
   }
  })

  //  AIzaSyBwRCodJDLOr0js_sl88pW96tsqGvyxpKM 