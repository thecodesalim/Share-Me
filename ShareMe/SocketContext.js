import React from 'react'
//window.navigator.userAgent = "react-native";
import io from "socket.io-client/dist/socket.io";



const s = io("http://10.34.143.111:8000/", { jsonp: false });

const GlobalContext = React.createContext();

export class GlobalContextProvider extends React.Component {
  render () {
    return (
      <GlobalContext.Provider
        value={s}
      >
        {this.props.children}
      </GlobalContext.Provider>
    )
  }
}

// create the consumer as higher order component
export const withGlobalContext = ChildComponent => props => (
  <GlobalContext.Consumer>
    {
      context => <ChildComponent {...props} socket={s}  />
    }
  </GlobalContext.Consumer>
);