//https://stackoverflow.com/questions/59393440/what-should-i-do-to-add-current-location-in-a-google-map-using-react-native-expo
//https://gist.github.com/jigkoxsee/437988af0eb506ffe9411fb9b3905640
//https://medium.com/@rishi.vedpathak/react-native-map-with-real-time-location-selection-for-android-739c23f04930 (marker)
import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';

export default class Map extends React.Component {
  
    state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
  };

  componentDidMount() {
    this.getLocationAsync();
  }

  handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  async getLocationAsync () {
    const { status, permissions } = await Permissions.askAsync(
      Permissions.LOCATION
    );
    if (status === 'granted') {
      this.setState({ hasLocationPermissions: true });
      //  let location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
      let location = await Location.getCurrentPositionAsync({});
      this.setState({ locationResult: JSON.stringify(location) });
      // Center the map on the location we just fetched.
      this.setState({
        mapRegion: {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        },
      });
    } else {
      alert('Location permission not granted');
    }
  };

  render() {
    return (
        
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          region={this.state.mapRegion}
          onRegionChange={this.handleMapRegionChange}
          coordinate
          showsCompass = {true}
          showsScale = {true}
          zoomEnabled = {true}
          scrollEnabled = {true}
        >
        <MapView.Marker
           coordinate={{latitude: 40.74327,
            longitude:-74.02589}}
          title={"Location"}
        />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

//40.74327, -74.02589