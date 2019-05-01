import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  SafeAreaView,
  Image
} from "react-native";

import { withGlobalContext } from "./SocketContext";

export class Chat extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    messages: [],
    chatMessage: ""
  };

  componentDidMount() {
    this.props.socket.on("chat", msg =>
      this.setState({ messages: [...this.state.messages, msg] })
    );
  }

  onSubmitMessage(e) {
    console.log(e + " fukkkk");
    this.props.socket.emit("chat", this.state.chatMessage);
    this.setState({ chatMessage: "" });
    console.log(this.state.message);
  }
  render() {
    const m = this.state.messages.map(i => (
      <Text key={i} style={styles.bubble}>
        {i}
      </Text>
    ));
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <SafeAreaView style={styles.container}>
          <View style={styles.inner}>
            <Text>Dave</Text>
            {m}
          </View>
          <View style={styles.send}>
             <Text style={{padding: 10}}>Hello</Text>
            </View>
            <View style={styles.receive}>
            <Text style={{padding: 10}}>Hi</Text>
            </View>
          <View style={styles.position}>
            <TextInput
              style={{
                height: 40,
                width: 300,
                borderColor: "gray",
                borderWidth: 0.5,
                borderRadius: 20,
              }}
              placeholder="message"
              value={this.state.chatMessage}
              onSubmitEditing={e => this.onSubmitMessage(e)}
              onChangeText={chatMessage => this.setState({ chatMessage })}
            />
            <Image
              source={require('./assets/send.png')}
            />
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

export default withGlobalContext(Chat);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    //padding: 24,
    flex: 1,
    justifyContent: "flex-start",
    alignSelf: "center"
  },
  send: {
    height: 40,
    width: 100,
    margin: 10,
    backgroundColor: "rgba(236, 100, 75, 0.5)",
    alignSelf: "flex-start",
    //marginTop: 10
  },
  receive: {
    height: 40,
    width: 100,
    margin: 10,
    backgroundColor: "rgba(236, 100, 75, 0.5)",
    alignSelf: "flex-end",
    
   // marginTop: 10
  },
  position: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignSelf: "center",
    //marginTop: 200
  },
  bubble: {
    height: 40,
    width: 100,
    backgroundColor: "tomato",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 20,
  },
  
});
