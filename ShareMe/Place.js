import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { MapView, Location, Permissions, Marker, Callout } from "expo";

export default class Place extends React.Component {


  render() {
    return (
      <View>
        <MapView.Marker
          coordinate={{
            latitude: this.props.latitude,
            longitude: this.props.longitude
          }}
        >
          <View style={this.props.circle} />
          <MapView.Callout tooltip={true} style={styles.box}
          onPress={() => this.props.onTap}
          >
            <View>
              <Text
                style={{ fontSize: 13, fontWeight: "600", marginBottom: 10 }}>
                {this.props.title}
              </Text>
              <ScrollView>{this.props.description}</ScrollView>
            </View>
          </MapView.Callout>
        </MapView.Marker>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 300,
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "blue",
    padding: 10
  }
});
