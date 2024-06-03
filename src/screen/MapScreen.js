import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
const MapScreen = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Map Screen</Text>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: -6.16379825738526,
          longitude: 106.8410530310208,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <Marker
          coordinate={{latitude: -6.16379825738526, longitude: 106.8410530310208}}
          title="Marker Title"
          description="This is the marker description"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
