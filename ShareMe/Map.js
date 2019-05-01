import React from "react";
import { StyleSheet, Text, View, TextInput, AlertIOS } from "react-native";
import { MapView, Location, Permissions } from "expo";
import Place from "./Place";
import Users from "./Users";
//window.navigator.userAgent = "react-native";
import { withGlobalContext } from "./SocketContext";

export class Map extends React.Component {
  constructor(props) {
    super(props);
  }
  static navigationOptions = {
    header: null
  };

  state = {
    location: null,
    policeData: [],
    desc: "",
    show: false,
    usersLocation: [],
    message: [],
    users: []
  };

  componentDidMount() {
    this.getUserLocation();
    this.props.socket.on("chat", location =>
      this.setState({ usersLocation: [...this.state.usersLocation, location] })
    );

    AlertIOS.prompt("Please type your name", null, name =>
      this.props.socket.emit("name", name)
    );
    this.getUsers();
  }

  getUserLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({
      location: location
    });
    const position = location.coords;
    this.getData(position.latitude, position.longitude);
  };

  onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  getData = async (lat, long) => {
    //const response = await fetch(`https://data.police.uk/api/crimes-street/all-crime?lat=${lat}&lng=${long}`)

    const response = await fetch(
      `https://data.police.uk/api/crimes-at-location?lat=${lat}&lng=${long}`
    );
    
    const data = await response.json();

    let policeData = data.map(i => i);
    this.setState({
      policeData: this.state.policeData.concat(policeData)
    });
  };

  onSubmitMessage = () => {
    this.props.socket.emit("chat", this.state.location);
    console.log("come on please work, YA ALLAH");
  };

  getUsers = () => {
    this.props.socket.on("name", id => {
      this.setState({
        users: [...this.state.users, id]
      });
    });
  };

  getCrimeDetails = () => {
    console.log('i love and hate programming')
  }

  createHeatMap = () => {
    let color = "rgba(255, 236, 139, 0.1)"
    this.state.policeData.map( i => {
      if(i.category === "violent-crime") {
        color = 'red'
      }
      else { 
        color = 'pink'
      }
      return(
        <MapView.Marker 
        center={{
          latitude: Number(i.location.latitude),
          longitude: Number(i.location.longitude),
        }}
        radius={25}
        fillColor={color}
        strokeColor= "rgba(255, 236, 139, 0.1)"
        >

        </MapView.Marker>
      )
    })
  }

  render() {
    if (!this.state.location) {
      return (
        <View>
          <Text>Loading Location</Text>
        </View>
      );
    }

    if (!this.state.policeData) {
      return (
        <View>
          <Text>Loading Location</Text>
        </View>
      );
    }

  
      let color = "rgba(255, 236, 139, 0.1)"
      this.state.policeData.map( i => {
        if(i.category === "violent-crime") {
          color = "rgba(236, 100, 75, 0.1)"
        }
        else { 
          color = "rgba(255, 236, 139, 0.1)"
        }
      })

    let markers = [];
    this.state.policeData.map(i => markers.push(i));
    let users = this.state.users.map(i => <Users name={i} key={i} />);
    this.state.users.map(i => console.log(i));
  
    return (
      <View style={styles.container}>
        <MapView
          onPress={(e) => console.log(e)}
          provider={MapView.PROVIDER_GOOGLE}
          style={styles.map}
          region={{
            latitude: this.state.location.coords.latitude,
            longitude: this.state.location.coords.longitude,
            latitudeDelta: 0.0922 / 50,
            longitudeDelta: 0.0421 / 50
          }}
        >
          <MapView.Circle
            center={this.state.location.coords}
            radius={50}
            fillColor="rgba(236, 100, 75, 0.2)"
            strokeColor ="rgba(236, 100, 75, 0.2)"
          />
          <MapView.Marker
            draggable
            coordinate={this.state.location.coords}
            title="You are here"
            description={this.state.desc}
            onDragEnd={e =>
              this.getData(
                e.nativeEvent.coordinate.latitude,
                e.nativeEvent.coordinate.longitude
              )
            }
          >
          </MapView.Marker>

          <MapView.Marker
            draggable
            coordinate={{
              latitude: 50.798400,
              longitude:-1.09147840
            }}
            title="Dave"
            description={this.state.desc}
            pinColor={'yellow'}
          ></MapView.Marker>

          {markers.map(i => {                                                              
            return (
              <View>
              <Place
                circle={styles.circle}
                key={i.persistent_id}
                latitude={Number(i.location.latitude)}
                longitude={Number(i.location.longitude)}
                title={i.category}
                description={<Text>{i.location.street.name}</Text>}
              />
              <MapView.Circle
                center={{
                  latitude: Number(i.location.latitude),
                  longitude: Number(i.location.longitude),
                }}
                radius={25}
                fillColor={color}
                strokeColor= "rgba(255, 236, 139, 0.1)"
              />
              </View>
              );
            
          })}
        </MapView>

        <MapView.Callout>
          <View style={styles.calloutView}>
            <TextInput
              style={styles.calloutSearch}
              placeholder={"Search"}
              onSubmitEditing={this.createHeatMap}
            />
          </View>
        </MapView.Callout>

        <MapView.Callout style={styles.members}>
          {users}
        </MapView.Callout>
      </View>
    );
  }
}

export default withGlobalContext(Map);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    flex: 1
  },
  box: {
    marginTop: 20,
    alignSelf: "center",
    width: 300,
    height: 80,
    borderRadius: 10,
    backgroundColor: "white",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    shadowColor: "blue",
    padding: 10
  },
  calloutView: {
    flexDirection: "row",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    width: "40%",
    marginLeft: "30%",
    marginRight: "30%",
    marginTop: 20
  },
  calloutSearch: {
    borderColor: "transparent",
    marginLeft: 10,
    width: "90%",
    marginRight: 10,
    height: 40,
    borderWidth: 0.0
  },
  members: {
    flexDirection: "column",
    borderRadius: 10,
    width: "40%",
    marginLeft: "0%",
    marginRight: "0%",
    marginTop: 260
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "red"
  },
  usercircle: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: "lightblue"
  },
  pinText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
    marginBottom: 10
  }
});
