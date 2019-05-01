import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Chat from "./Chat";

export class FriendsView extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity 
        style={styles.box}
        onPress={() => this.props.navigation.navigate('Chat')}>
          <Text> Dave </Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.box}
        onPress={() => this.props.navigation.navigate('Chat')}>
          <Text> Sury </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: FriendsView,
    Chat: Chat
  },
  {
    initialRouteName: "Home"
  }
);

export default AppContainer = createAppContainer(RootStack);

//export const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },

  box: {
    marginBottom: 5,
    width: "100%",
    height: 75,
    backgroundColor: "#F5F5F5",
    alignSelf: "center",
    justifyContent: "center",
    textAlign:'center',
  }
});
